import React from "react";

export default function Login() {
  return (
    <div className="container d-flex justify-content-end h-100">
      <div className="card-box">
        <div>
          <h1 className="main-font">Login</h1>
          <form>
            <div className="col-12 col-md-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control border-none"
                required
              ></input>
            </div>
            <div className="col-12 col-md-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control border-none"
                required
              ></input>
            </div>
            <div>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
