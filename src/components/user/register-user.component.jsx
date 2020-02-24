import React from "react";
import { user } from "../../services/userService";
<<<<<<< HEAD
import { useFormState } from "react-use-form-state";

export default function RegisterUser() {
  const [
    formState,
    { userId, name, lastName, birthDate, email, address, phoneNumber, gender }
  ] = useFormState();
=======

export default function RegisterUser() {
  const [userId, setIdentification] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
>>>>>>> parent of b369b83... email validation

  function registerUser(event) {
    event.preventDefault();
    user({
      formState
    }).then(res => {
      console.log(res);
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
<<<<<<< HEAD
            <label className="label-padding">Identification</label>
            <input {...userId} required className="form-control border-none" />
            <label className="label-padding">Name</label>
            <input {...name} required className="form-control border-none" />
            <label className="label-padding">Lastname</label>
            <input
              {...lastName}
              required
              className="form-control border-none"
            />
            <label className="label-padding">Birth date</label>
            <input
              {...birthDate}
              required
              type="date"
              className="form-control border-none"
            />
            <label className="label-padding">Email</label>
            <input {...email} required className="form-control border-none" />
            <label className="label-padding">Address</label>
            <input {...address} required className="form-control border-none" />
            <label className="label-padding">Phone number</label>
            <input
              {...phoneNumber}
              required
              className="form-control border-none"
            />
            <label className="label-padding">Gender</label>
            <select {...gender}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            <div className="register-button-container label-padding">
              <button className="btn btn-register">Submit</button>
=======
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
                <label>Last name</label>
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
                  onChange={e => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="col-12 label-padding">
                <label>Phone number</label>
                <input
                  type="text"
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
              <button type="submit" className="btn btn-register">
                Register
              </button>{" "}
>>>>>>> parent of b369b83... email validation
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
