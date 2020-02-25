import React from "react";
import Wizard from "react-simple-step-wizard";
import InputSelect from "../input-select/input-select.component";
import Input from "../input/input.component";
import { useAccounts } from "../../hooks/useAccounts";
import { useFormState } from "react-use-form-state";

export default function Transaction() {
  const [formState, { raw }] = useFormState();
  const { accounts } = useAccounts();

  const Step1 = () => (
    <div>
      {" "}
      <div className="container register-container">
        <div className="card main-card">
          <div className="card-body">
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
    </div>
  );

  function getAccounts(event) {
    event.preventDefault();
    console.log(accounts);
  }

  function onClick() {
    this.setState(prevState => ({
      isCustomizeVisible: !prevState.isCustomizeVisible
    }));
  }

  return (
    <div>
      <div>
        <p>Step 3 visible: </p>
        <button type="button" onClick={onClick}>
          Toggle Step 3
        </button>
      </div>
      <Wizard>
        <Wizard.StepTracker />
        <Wizard.Steps>
          <Step1 stepLabel="Search" />
          <Wizard.StepGroup stepLabel="Submit"></Wizard.StepGroup>
        </Wizard.Steps>
      </Wizard>
    </div>
  );
}
