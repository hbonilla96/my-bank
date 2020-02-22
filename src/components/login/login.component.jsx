import React, { useState } from "react";
import { user } from "../../services/loginService";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    user({
      userId,
      password
    }).then(res => {
      console.log(res);
      setUserId("");
      setPassword("");
    });
  }

  return (
    <div className="d-flex h-100 login-container">
      <div className="card-box">
        <div>
          <h1 className="main-font">Online bank</h1>
          <form onSubmit={login}>
            <div className="col-12">
              <label className="main-font">User name</label>
              <input
                type="text"
                className="form-control border-none"
                required
                value={userId}
                onChange={e => setUserId(e.target.value)}
              ></input>
            </div>
            <div className="col-12 password-text">
              <label className="main-font">Password</label>
              <input
                type="text"
                className="form-control border-none"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="login-button">
              <button className="btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
