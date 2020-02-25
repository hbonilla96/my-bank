import React from "react";
import cx from "classnames";

export default function InputSelect({ inputRef, isValid, errorMessage }) {
  return (
    <div>
      <select
        className={cx("bottom-border size", { invalid: !isValid })}
        {...inputRef}
      >
        <option value="Female"> Female</option>
        <option value="Male"> Male</option>
        <option value="other"> Other</option>
      </select>
      {errorMessage && <span className="error-message ">{errorMessage}</span>}
    </div>
  );
}
