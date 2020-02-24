import React, { useState } from "react";
import { user } from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as EmailValidator from "email-validator";

export default function RegisterUser() {
  const [userId, setIdentification] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let notify;

  function onChangeEmail(email) {
    setEmail(email);
    if (!!EmailValidator.validate(email)) {
      notify = toast("Incorrect email format.");
    } else {
      notify = toast("nel");
    }
  }

  function registerUser(event) {
    event.preventDefault();
    user({
      userId,
      name,
      lastName,
      birthDate,
      email,
      address,
      phoneNumber
    }).then(res => {
      console.log(res);
      setIdentification("");
      setName("");
      setLastName("");
      setBirthDate("");
      setEmail("");
      setAddress("");
      setPhoneNumber("");
    });
  }

  return (
    <div className="container register-container">
      <div className="card main-card">
        <div className="card-body">
          <div>
            <h4 className="main-font">Register</h4>
          </div>
          <form onSubmit={registerUser}>
            <div className="row">
              <div className="col-12 label-padding">
                <label className="label-padding-left">Identification</label>
                <input
                  type="text"
                  className="form-control border-none"
                  value={userId}
                  onChange={e => setIdentification(e.target.value)}
                ></input>
              </div>
              <div className="col-12 label-padding">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control border-none"
                  value={name}
                  onChange={e => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row first-column">
              <div className="col-12 label-padding">
                <label>Lastname</label>
                <input
                  type="text"
                  className="form-control border-none"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                ></input>
              </div>
              <div className="col-12 label-padding">
                <label>Birth date</label>
                <input
                  type="date"
                  className="form-control border-none"
                  value={birthDate}
                  onChange={e => setBirthDate(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row first-column">
              <div className="col-12 label-padding">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control border-none"
                  value={email}
                  onChange={e => onChangeEmail(e.target.value)}
                ></input>
              </div>

              <div className="col-12 label-padding">
                <label>Phone number</label>
                <input
                  type="number"
                  className="form-control border-none"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row first-column">
              <div className="col-12 label-padding">
                <label>Address</label>
                <textarea
                  type="text"
                  className="form-control border-none"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="register-button-container ">
              <ToastContainer
                autoDismiss
                autoDismissTimeout={8000}
                position={toast.POSITION.BOTTOM_RIGHT}
              />
              <button type="submit" className="btn btn-register">
                Register
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
