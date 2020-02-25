import React from "react";
import cx from "classnames";

export default function InputSelect({
  inputRef,
  isValid,
  errorMessage,
  children
}) {
  return (
    <div>
      <select
        className={cx("bottom-border size", { invalid: !isValid })}
        {...inputRef}
      >
        {children}
      </select>
      {errorMessage && <span className="error-message ">{errorMessage}</span>}
    </div>
  );
}
