import axios from "axios";

export const getUserTransactions = () => {
  let token = sessionStorage.getItem("token");
  let userId = sessionStorage.getItem("username");
  const url = `https://agnatebankapi.herokuapp.com/api/v1/history/${userId}`;
  return axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
};
