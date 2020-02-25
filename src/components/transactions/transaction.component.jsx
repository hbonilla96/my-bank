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
    <div className="container destination-container">
      <div className="card main-card">
        <div className="card-body">
          <div>
            {" "}
            <span>Origin account data </span>
          </div>
          <label>Origin account</label>
          <InputSelect>
            {accounts &&
              accounts.map(account => {
                return (
                  <option
                    key={account.id}
                  >{`${account.accountNumber} ${account.accountHolder} ${account.balance}`}</option>
                );
              })}
          </InputSelect>
        </div>
      </div>
    </div>
  );

  const Step2 = () => (
    <div className="container destination-container">
      <div className="card main-card">
        <div className="card-body">
          <div>
            <div>
              <span>Destination account data</span>
            </div>
            <label>Id number</label>
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
            <label>Destination account</label>
            <Input
              inputRef={raw({
                name: "destinationAccount",
                onChange: e => e.target.value,
                validate: (value, values, event) => {
                  if (value === "") {
                    return "This field is required";
                  }
                }
              })}
              isValid={formState.validity.destinationAccount}
              errorMessage={formState.errors.destinationAccount}
              type={"text"}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const Step3 = () => (
    <div>
      <h1>Confirmation</h1>
    </div>
  );

  const MyStepTracker = ({ currentStep = 0, steps = [] }) => (
    <div>
      <p>Current step is: {steps[currentStep]}</p>
    </div>
  );
  const MyNavigator = ({
    getFirstStepProps,
    getLastStepProps,
    getNextStepProps,
    getPrevStepProps
  }) => (
    <div>
      <button type="button" {...getFirstStepProps()}>
        &lt;&lt; First step
      </button>
      <button type="button" {...getPrevStepProps()}>
        &lt; Go back
      </button>
      <button type="button" {...getNextStepProps()}>
        Next &gt;
      </button>
      <button type="button" {...getLastStepProps()}>
        Last step&gt;&gt;
      </button>
    </div>
  );

  function getAccounts(event) {
    event.preventDefault();
    console.log(accounts);
  }

  function handleStepChange(currentStep) {
    console.log(currentStep);
  }

  return (
    <div className="container steps-container">
      <Wizard onStepChange={handleStepChange}>
        <Wizard.StepTracker />
        <Wizard.Steps>
          <Step1 stepLabel="Destination account" />
          <Step2 stepLabel="Origin account" />
          <Step3 stepLabel="Confirmation"></Step3>
        </Wizard.Steps>
        <Wizard.StepTracker>
          {stepTrackerProps => <MyStepTracker {...stepTrackerProps} />}
        </Wizard.StepTracker>
        <Wizard.Navigator>
          {navigatorProps => <MyNavigator {...navigatorProps} />}
        </Wizard.Navigator>
      </Wizard>
    </div>
  );
}
