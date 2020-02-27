import React, { useState } from "react";
import Input from "../input/input.component";
import { useFormState } from "react-use-form-state";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomLoader from "../loader/loader.component";
import { changePassword } from "../../services/userService";

export default function ChangePassword() {
  const userId = sessionStorage.getItem("username");
  const [formState, { raw }] = useFormState({
    userId: userId
  });
  const [isLoading, setIsLoading] = useState(false);

  function onChangePasword(event) {
    event.preventDefault();
    setIsLoading(true);
    if (formState.values.password1 === formState.values.password) {
      changePassword({
        userId: formState.values.userId,
        password: formState.values.password
      })
        .then(res => {
          toast.success("Password changed", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          setIsLoading(false);
          formState.clear();
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
    } else {
      setIsLoading(false);
      toast.error("Passwords do not match", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

  console.log(formState.values);

  return (
    <div className="container destination-container-center border-top-line password-container">
      <div className="card main-card">
        <div className="card-body">
          <div>
            <h4 className="main-font">Change password</h4>
          </div>
          <div>
            <form onSubmit={onChangePasword}>
              <Input
                inputRef={raw({ name: "userId" })}
                isValid={formState.validity.userId}
                errorMessage={formState.errors.userId}
                type={"text"}
                hiden={"hidden"}
              />
              <label className="pass-label-padding">
                <span className="required">*</span>New password
              </label>
              <Input
                inputRef={raw({
                  name: "password1",
                  onChange: e => e.target.value,
                  validate: (value, values, event) => {
                    if (value === "") {
                      return "This field is required";
                    }
                  }
                })}
                isValid={formState.validity.password1}
                errorMessage={formState.errors.password1}
                type={"password"}
              />
              <label className="pass-label-padding">
                <span className="required">*</span>Confirm new password
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
              <div className="register-button-container pass-label-padding">
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
