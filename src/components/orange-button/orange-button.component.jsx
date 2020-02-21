import React from "react";
import { Link } from "react-router-dom";

export default function OrangeButton() {
  return (
    <div className="register-button">
      <div className="button">
        <span>
          {" "}
          <a className=" link-a register font-general" to="/agent">
            Login
          </a>
        </span>
        <svg>
          <polyline
            className="o1"
            points="0 0, 150 0, 150 55, 0 55, 0 0"
          ></polyline>
          <polyline
            className="o2"
            points="0 0, 150 0, 150 55, 0 55, 0 0"
          ></polyline>
        </svg>
      </div>
    </div>
  );
}
