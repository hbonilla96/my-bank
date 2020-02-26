import React, { useEffect } from "react";
import Wizard from "react-simple-step-wizard";
import InputSelect from "../input-select/input-select.component";
import Input from "../input/input.component";
import { useAccounts } from "../../hooks/useAccounts";
import { useFormState } from "react-use-form-state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getAccountsByUserName } from "../../services/accountService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Step2 = ({ raw, formState }) => (
  <div className="container destination-container border-top-line">
    <div className="card main-card">
      <div className="card-body">
        <div>
          <div className="transaction-step-title">
            <span className="bold-text ">Destination account data</span>
          </div>
          <label className="bold-text">Id number</label>
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
          <ToastContainer autoClose={false} />
        </div>
      </div>
    </div>
  </div>
);

const Step3 = ({ raw, formState }) => (
  <div className="container destination-container border-top-line">
    <div className="card main-card">
      <div className="card-body">
        <div>
          <div className="transaction-step-title">
            <span className="bold-text ">Transaction details</span>
          </div>
          <label className="bold-text">Transfer amount</label>
          <Input
            inputRef={raw({
              name: "transferAmount",
              onChange: e => e.target.value,
              validate: (value, values, event) => {
                if (value === "") {
                  return "This field is required";
                }
              }
            })}
            isValid={formState.validity.transferAmount}
            errorMessage={formState.errors.transferAmount}
            type={"number"}
          />
          <label>Transaction detail</label>
          <Input
            inputRef={raw({
              name: "transferDetail",
              onChange: e => e.target.value,
              validate: (value, values, event) => {
                if (value === "") {
                  return "This field is required";
                }
              }
            })}
            isValid={formState.validity.transferDetail}
            errorMessage={formState.errors.transferDetail}
            type={"text"}
          />
        </div>
      </div>
    </div>
  </div>
);

export default function Transaction() {
  const [formState, { raw }] = useFormState({
    originAccount: "",
    userId: "",
    destinationAccount: ""
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const { accounts } = useAccounts();
  const [destinationAccount, setDestinationAccount] = useState();

  useEffect(() => {
    if (currentStep === 1 && formState.values.originAccount) {
      setIsNextDisabled(false);
    }
    if (
      currentStep === 2 &&
      formState.values.userId &&
      formState.values.destinationAccount &&
      formState.values.userId.length >= 9 &&
      formState.values.destinationAccount.length >= 22
    ) {
      onNextDestinationAccount();
    }
  }, [formState.values]);

  useEffect(() => {
    setIsNextDisabled(true);
  }, [currentStep]);

  function onNextDestinationAccount() {
    if (formState.values.userId && formState.values.destinationAccount) {
      getAccountsByUserName(
        formState.values.destinationAccount,
        formState.values.userId
      ).then(res => {
        if (res.data.length > 0) {
          setDestinationAccount(res.data);
        } else {
          setDestinationAccount(null);
          toast.error("Account doesn´t exist.", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
        console.log(res);
      });
    }
  }

  useEffect(() => {
    destinationAccount && setIsNextDisabled(false);
  }, [destinationAccount]);

  function handleStepChange(currentStep) {
    setCurrentStep(currentStep + 1);
    if (currentStep === 2) {
      onNextDestinationAccount();
    }
  }

  const Step1 = () => (
    <div className="container destination-container border-top-line">
      <div className="card main-card">
        <div className="card-body">
          <div className="transaction-step-title">
            <span className="bold-text ">Origin account data </span>
          </div>
          <label className="bold-text ">Origin account</label>
          <InputSelect
            inputRef={raw({
              name: "originAccount",
              onChange: e => e.target.value
            })}
          >
            {accounts &&
              accounts.map(account => {
                return (
                  <option
                    key={account.id}
                    value={account.accountNumber}
                  >{`${account.accountNumber} - ${account.accountHolder} - ${account.balance} - ${account.currency}`}</option>
                );
              })}
          </InputSelect>
        </div>
      </div>
    </div>
  );

  const Step4 = () => (
    <div className="border-top-line">
      <h1>Confirmation</h1>
      <div className="confirm-origin-account">
        <p>Origin account</p>
        <span>
          {accounts &&
            accounts.map(account => {
              return <span>{account.accountNumber}</span>;
            })}
        </span>
      </div>
      <div className="confirm-destination-account">
        <p>Destination account</p>
        <span>{formState.values.originAccount}</span>
        <p>Transfer amount</p>
        <span>{formState.values.transferAmount}</span>
        <p>Transfer detail</p>
        <span>{formState.values.transferDetail}</span>
      </div>
    </div>
  );

  const MyStepTracker = ({ currentStep = 0, steps = [] }) => (
    <div className="current-step-label">
      <p>
        Current step is: <span className="bold-text">{steps[currentStep]}</span>
      </p>
    </div>
  );
  const MyNavigator = ({ getNextStepProps, getPrevStepProps }) => (
    <div className="directions ">
      <button className="default-button" type="button" {...getPrevStepProps()}>
        <FontAwesomeIcon
          className="font-orange svg-width main-font"
          icon={faArrowLeft}
        />
        Go back
      </button>
      <button
        className="default-button"
        type="button"
        {...getNextStepProps()}
        disabled={isNextDisabled}
      >
        Next
        <FontAwesomeIcon
          className="font-orange svg-width main-font"
          icon={faArrowRight}
        />
      </button>
    </div>
  );

  console.log(isNextDisabled, currentStep);

  return (
    <div className="container steps-container">
      <h1>Transfer</h1>
      <div className="wizard">
        <Wizard onStepChange={handleStepChange}>
          <Wizard.StepTracker />
          <Wizard.Steps>
            <Step1 stepLabel="Origin account" />
            <Step2
              stepLabel="Destination account"
              raw={raw}
              formState={formState}
            />
            <Step3
              stepLabel="Transaction details"
              raw={raw}
              formState={formState}
            ></Step3>
            <Step4 stepLabel="Confirmation"></Step4>
          </Wizard.Steps>
          <Wizard.StepTracker>
            {stepTrackerProps => <MyStepTracker {...stepTrackerProps} />}
          </Wizard.StepTracker>
          <Wizard.Navigator>
            {navigatorProps => <MyNavigator {...navigatorProps} />}
          </Wizard.Navigator>
        </Wizard>
      </div>
    </div>
  );
}
