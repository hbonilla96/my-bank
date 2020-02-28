import axios from "axios";
import { BehaviorSubject } from "rxjs";

const authEndpoint = "https://agnatebankapi.herokuapp.com/auth";

const userData = new BehaviorSubject({ isUserLogged: false });

const login = data =>
  axios.post(authEndpoint, data).then(res => {
    userData.next({ isUserLogged: true });
    return new Promise(resolve => resolve(res));
  });

const logOut = () => {
  userData.next({ isUserLogged: false });
  sessionStorage.clear();
};

export const loginService = {
  login,
  logOut,
  userData
};
