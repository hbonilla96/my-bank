import React from "react";
import InputSelect from "../input-select/input-select.component";
import { useAccounts } from "../../hooks/useAccounts";
import { useFormState } from "react-use-form-state";
import Input from "../input/input.component";

export default function Transaction() {
  const [formState, { raw }] = useFormState();
  const { accounts } = useAccounts();

  function getAccounts(event) {
    event.preventDefault();
    console.log(accounts);
  }

  return (
    <div className="container register-container">
      <div className="card main-card">
        <div className="card-body">
          <div>
            <div>
              {" "}
              <span>Origin account data </span>
            </div>
            <label>Origin account</label>
            <InputSelect>
              {accounts &&
                accounts.map(account => {
                  return (
                    <option>{`${account.accountNumber} ${account.accountHolder} ${account.balance}`}</option>
                  );
                })}
            </InputSelect>
          </div>

          <hr></hr>
          <div>
            <div>
              <span>Destination account data</span>
            </div>
            <label>Destination account</label>
            <Input
              inputRef={raw({
                name: "userId",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.userId}
              errorMessage={formState.errors.userId}
              type={"text"}
            />
            <InputSelect>
              <option value="CR">Colon </option>
              <option value="DOL">Dolar </option>
            </InputSelect>
          </div>

          <button onClick={getAccounts}>accounts</button>
        </div>
      </div>
    </div>
  );
}
