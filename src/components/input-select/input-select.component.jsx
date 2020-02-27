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
        className={cx("bottom-border size separator title-font", {
          invalid: !isValid
        })}
        {...inputRef}
      >
        <option className="text-font title-font">Select an option</option>
        {children}
      </select>
      {errorMessage && <span className="error-message ">{errorMessage}</span>}
    </div>
  );
}
