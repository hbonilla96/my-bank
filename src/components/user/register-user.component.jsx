import React, { useState } from "react";
import { user } from "../../services/userService";
import { useFormState } from "react-use-form-state";
import * as EmailValidator from "email-validator";
import Input from "../input/input.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomLoader from "../loader/loader.component";
import InputSelect from "../input-select/input-select.component";
import { withRouter } from "react-router";

const Login = ({ history }) => {
  const [formState, { raw }] = useFormState();
  const [isLoading, setIsLoading] = useState(false);

  function registerUser(event) {
    event.preventDefault();
    setIsLoading(true);
    user({
      ...formState.values
    })
      .then(res => {
        toast.success(
          "Successful registration, an email has been sent with your credentials!",
          {
            position: toast.POSITION.BOTTOM_RIGHT
          }
        );
        setIsLoading(false);
        formState.clear();
        history.push("/dashboard");
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

  function validateForm() {
    let result = true;

    for (let value in formState.touched) {
      result = result && formState.validity[value] && formState.touched[value];
    }
    return result;
  }

  return (
    <div className="container register-container">
      <div className="card main-card">
        <div className="card-body">
          <div>
            <h4 className="main-font">Register</h4>
          </div>
          <form onSubmit={registerUser}>
            <label className="label-padding">
              <span className="required">*</span>Identification
            </label>
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
            <label className="label-padding">
              <span className="required">*</span>Name
            </label>
            <Input
              inputRef={raw({
                name: "name",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.name}
              errorMessage={formState.errors.name}
              type={"text"}
            />
            <label className="label-padding">
              <span className="required">*</span>Last name
            </label>
            <Input
              inputRef={raw({
                name: "lastName",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.lastName}
              errorMessage={formState.errors.lastName}
              type={"text"}
            />
            <label className="label-padding">
              <span className="required">*</span>Birthday
            </label>
            <Input
              inputRef={raw({
                name: "birthDate",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.birthDate}
              errorMessage={formState.errors.birthDate}
              type={"date"}
            />
            <label className="label-padding">
              <span className="required">*</span>Email
            </label>
            <Input
              inputRef={raw({
                name: "email",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (EmailValidator.validate(value) !== true) {
                    return "Incorrect email format";
                  }
                }
              })}
              isValid={formState.validity.email}
              errorMessage={formState.errors.email}
              type={"text"}
            />
            <label className="label-padding">
              <span className="required">*</span>Address
            </label>
            <Input
              inputRef={raw({
                name: "address",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.address}
              errorMessage={formState.errors.address}
              type={"textarea"}
            />
            <label className="label-padding">
              <span className="required">*</span>Phone number
            </label>
            <Input
              inputRef={raw({
                name: "phoneNumber",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.phoneNumber}
              errorMessage={formState.errors.phoneNumber}
              type={"number"}
            />
            <label className="label-padding">
              <span className="required">*</span>Gender
            </label>
            <InputSelect
              inputRef={raw({
                name: "gender",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.gender}
              errorMessage={formState.errors.gender}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="other">Other</option>
            </InputSelect>
            <div className="register-button-container label-padding">
              <ToastContainer autoClose={false} />
              <button
                type="submit"
                disabled={!validateForm()}
                className="btn btn-register"
              >
                Register
              </button>
              <div>{isLoading && <CustomLoader></CustomLoader>}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
