import axios from "axios";

let token = sessionStorage.getItem("token");
let userId = sessionStorage.getItem("username");

export const getUserTransactions = () => {
  const url = `http://localhost:3378/api/v1/history/${userId}`;
  return axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
};
