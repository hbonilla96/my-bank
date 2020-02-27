import React, { useState } from "react";
import { loginService } from "../../services/loginService";
import CustomLoader from "../loader/loader.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUserLoggedIn } from "../../services/loginService";
import { withRouter } from "react-router";

const Login = ({ history }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let notify;

  function login(event) {
    event.preventDefault();
    setIsLoading(true);
    loginService
      .login({
        userId,
        password
      })
      .then(res => {
        setUserId("");
        setPassword("");
        setIsLoading(false);
        toast.success("Welcome to Agnate bank", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
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
              <input
                type="text"
                className="form-control border-none"
                required
                value={userId}
                onChange={e => setUserId(e.target.value)}
              ></input>
            </div>
            <div className="col-12 password-text">
              <label className="title-font">Password</label>
              <input
                type="password"
                className="form-control border-none"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></input>
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
