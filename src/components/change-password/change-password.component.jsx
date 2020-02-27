import React, { useState } from "react";
import Input from "../input/input.component";
import { useFormState } from "react-use-form-state";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomLoader from "../loader/loader.component";
import { changePassword } from "../../services/userService";

export default function ChangePassword() {
  const [formState, { raw }] = useFormState();
  const [isLoading, setIsLoading] = useState(false);
  const userId = sessionStorage.getItem("username");

  function onChangePasword(event) {
    event.preventDefault();
    setIsLoading(true);
    changePassword({
      ...formState.values
    })
      .then(res => {
        toast.success("Pssword changed", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        toast.error(
          "There was an error trying to save your data, please try again.",
          {
            position: toast.POSITION.BOTTOM_RIGHT
          }
        );
      });
  }

  return (
    <div className="container destination-container-center border-top-line password-container">
      <div className="card main-card">
        <div className="card-body">
          <div>
            <h4 className="main-font">Change password</h4>
          </div>
          <div>
            <form onSubmit={onChangePasword}>
              <label className="label-padding">
                <span className="required">*</span>User
              </label>
              <Input
                inputRef={raw({ name: "userId" })}
                isValid={formState.validity.userId}
                errorMessage={formState.errors.userId}
                type={"text"}
                value={userId}
                readonly={true}
              />
              <label className="label-padding">
                <span className="required">*</span>New Password
              </label>
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
              <div className="register-button-container label-padding">
                <ToastContainer autoClose={false} />
                <button type="submit" className="btn btn-register">
                  Change password
                </button>
                <div>{isLoading && <CustomLoader></CustomLoader>}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
