import axios from "axios";

let id = sessionStorage.getItem("id");

const authEndpoint = `http://localhost:3378/api/v1/account/${id}`;

let token = sessionStorage.getItem("token");

export const getAccounts = () =>
  axios.get(authEndpoint, {
    headers: { Authorization: "Bearer " + token }
  });

export const getAccountsByUserName = (accountUserName, userName) => {
  const url = `http://localhost:3378/api/v1/account/${accountUserName}/${userName}`;
  axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
};
