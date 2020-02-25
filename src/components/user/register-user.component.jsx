import React from "react";
import { user } from "../../services/userService";
import { useFormState } from "react-use-form-state";
import * as EmailValidator from "email-validator";
import Input from "../input/input.component";

export default function Login() {
  const [formState, { raw }] = useFormState();
  let notify;

  function registerUser(event) {
    event.preventDefault();
    user({
      formState
    }).then(res => {
      console.log(res);
    });
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
              <span>*</span>Identification
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
              <span>*</span>Name
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
              <span>*</span>Lastname
            </label>
            <Input
              inputRef={raw({
                name: "lastname",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.lastname}
              errorMessage={formState.errors.lastname}
              type={"text"}
            />
            <label className="label-padding">
              <span>*</span>Birthdate
            </label>
            <Input
              inputRef={raw({
                name: "birthdate",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.birthdate}
              errorMessage={formState.errors.birthdate}
              type={"date"}
            />
            <label className="label-padding">
              <span>*</span>Email
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
              <span>*</span>Addres
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
              <span>*</span>Phone number
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
              <span>*</span>Gender
            </label>
            <Input
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
              type={"text"}
            />

            <div className="register-button-container">
              <button className="btn btn-register">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
