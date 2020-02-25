import React from "react";
import cx from "classnames";

export default function Input({ inputRef, isValid, errorMessage, type }) {
  return (
    <div>
      <input
        type={type}
        className={cx("bottom-border size", { invalid: !isValid })}
        {...inputRef}
      ></input>
      {errorMessage && <span className="error-message ">{errorMessage}</span>}
    </div>
  );
}
