import React from "react";
import { user } from "../../services/userService";
import { useFormState } from "react-use-form-state";

export default function RegisterUser() {
  const [
    formState,
    { userId, name, lastName, birthDate, email, address, phoneNumber, gender }
  ] = useFormState();

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
            <label className="label-padding">Identification</label>
            <input {...userId} required className="form-control border-none" />
            <label className="label-padding">Name</label>
            <input {...name} required className="form-control border-none" />
            <label className="label-padding">Lastname</label>
            <input
              {...lastName}
              required
              className="form-control border-none"
            />
            <label className="label-padding">Birth date</label>
            <input
              {...birthDate}
              required
              type="date"
              className="form-control border-none"
            />
            <label className="label-padding">Email</label>
            <input {...email} required className="form-control border-none" />
            <label className="label-padding">Address</label>
            <input {...address} required className="form-control border-none" />
            <label className="label-padding">Phone number</label>
            <input
              {...phoneNumber}
              required
              className="form-control border-none"
            />
            <label className="label-padding">Gender</label>
            <select {...gender}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            <div className="register-button-container label-padding">
              <button className="btn btn-register">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
