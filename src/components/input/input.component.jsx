import React from "react";
import cx from "classnames";

export default function Input({
  inputRef,
  isValid,
  errorMessage,
  type,
  value,
  readonly
}) {
  return (
    <div>
      <input
        type={type}
        className={cx("bottom-border size title-font", { invalid: !isValid })}
        {...inputRef}
        defaultValue={value}
        readOnly={readonly}
      ></input>
      {errorMessage && (
        <span className="error-message title-font">{errorMessage}</span>
      )}
    </div>
  );
}
