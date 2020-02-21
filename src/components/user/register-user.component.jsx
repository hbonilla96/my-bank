import React, { useState } from "react";
import { user } from "../../services/userService";

export default function RegisterUser() {
  const [userId, setIdentification] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card main-card">
          <div className="card-body">
            <div>
              <h4 className="main-font">Register</h4>
            </div>
            <form onSubmit={registerUser}>
              <div className="row">
                <div className="col-12 col-md-6">
                  <label className="label-padding-left">Identification</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={userId}
                    onChange={e => setIdentification(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="row first-column">
                <div className="col-12 col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                  ></input>
                </div>
                <div className="col-12 col-md-6">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="row first-column">
                <div className="col-12 col-md-6">
                  <label>Birth date</label>
                  <input
                    type="date"
                    className="form-control"
                    required
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                  ></input>
                </div>
                <div className="col-12 col-md-6">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="col-12 col-md-6">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                  ></input>
                </div>
                <div className="col-12 col-md-6">
                  <label>Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <button type="submit" className="button">
                  Register
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
