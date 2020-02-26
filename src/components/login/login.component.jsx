import React, { useState } from "react";
import { user } from "../../services/loginService";
import CustomLoader from "../loader/loader.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let notify;

  function login(event) {
    event.preventDefault();
    setIsLoading(true);
    user({
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
          <h1 className="main-font title-font">Online bank</h1>
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
                type="password"
                className="form-control border-none"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="login-button">
              <button className="btn" onClick={notify}>
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
}
