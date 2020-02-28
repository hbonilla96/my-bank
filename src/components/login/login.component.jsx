import React, { useState } from "react";
import { loginService } from "../../services/loginService";
import CustomLoader from "../loader/loader.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router";
import { useEffect } from "react";
import Input from "../input/input.component";
import { useFormState } from "react-use-form-state";

const Login = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, { raw }] = useFormState();
  let notify;
  useEffect(() => {
    loginService.logOut();
  }, []);

  function login(event) {
    event.preventDefault();
    setIsLoading(true);
    loginService
      .login({
        ...formState.values
      })
      .then(res => {
        formState.clear();
        setIsLoading(false);
        toast.success("Welcome to Agnate bank", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        sessionStorage.clear();
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("username", res.data.username);
        sessionStorage.setItem("id", res.data.id.id);
        history.push("/dashboard");
      })
      .catch(error => {
        toast.error("Incorrect username or password. Try again.", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setIsLoading(false);
      });
  }

  return (
    <div className="d-flex h-100 login-container">
      <div className="card-box">
        <div>
          <h1 className="title-font">Online bank</h1>
          <form onSubmit={login}>
            <div className="col-12">
              <label className="title-font">User name</label>
              <Input
                inputRef={raw({
                  name: "userId",
                  onChange: e => e.target.value,
                  validate: (value, values, event) => {
                    if (value === "") {
                      return "This field is required";
                    }
                  }
                })}
                isValid={formState.validity.userId}
                errorMessage={formState.errors.userId}
                type={"text"}
              />
            </div>
            <div className="col-12 password-text">
              <label className="title-font">Password</label>
              <Input
                inputRef={raw({
                  name: "password",
                  onChange: e => e.target.value,
                  validate: (value, values, event) => {
                    if (value === "") {
                      return "This field is required";
                    }
                  }
                })}
                isValid={formState.validity.password}
                errorMessage={formState.errors.password}
                type={"password"}
              />
            </div>
            <div className="login-button">
              <button className="btn title-font" onClick={notify}>
                Login
              </button>
              <ToastContainer autoClose={false} />
            </div>
            <div>{isLoading && <CustomLoader></CustomLoader>}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
