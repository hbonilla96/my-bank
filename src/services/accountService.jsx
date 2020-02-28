import axios from "axios";

export const getAccounts = () => {
  let id = sessionStorage.getItem("id");
  let token = sessionStorage.getItem("token");
  const authEndpoint = `https://agnatebankapi.herokuapp.com/api/v1/account/${id}`;

  return axios.get(authEndpoint, {
    headers: { Authorization: "Bearer " + token }
  });
};

export const getAccountsByUserName = (accountUserName, userName) => {
  const url = `https://agnatebankapi.herokuapp.com/api/v1/account/${accountUserName}/${userName}`;
  let token = sessionStorage.getItem("token");
  return axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
};

export const doTransaction = data => {
  const url = "https://agnatebankapi.herokuapp.com/api/v1/transaction";
  let token = sessionStorage.getItem("token");
  return axios.post(url, data, {
    headers: { Authorization: "Bearer " + token }
  });
};
