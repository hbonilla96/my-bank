import React from "react";
import Login from "../login/login.component";

export default function LandingPage() {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-sm-6 content-wrapper">
            <img src="/img/image-1.png" alt="mainimage"></img>
          </div>
          <div className="col-sm-6">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
}
