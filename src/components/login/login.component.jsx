import React from "react";
import OrangeButton from "../orange-button/orange-button.component";

export default function Login() {
  return (
    <div className="container d-flex h-100 login-container">
      <div className="card-box">
        <div>
          <h1 className="main-font">Login</h1>
          <form>
            <div className="col-12 col-md-6">
              <label className="main-font">User name</label>
              <input
                type="text"
                className="form-control border-none"
                required
              ></input>
            </div>
            <div className="col-12 col-md-6">
              <label className="main-font">Password</label>
              <input
                type="text"
                className="form-control border-none"
                required
              ></input>
            </div>
            <div className="login-button">
              <OrangeButton></OrangeButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
