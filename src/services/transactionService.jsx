import axios from "axios";

export const getUserTransactions = () => {
  let token = sessionStorage.getItem("token");
  let userId = sessionStorage.getItem("username");
  const url = `http://localhost:3378/api/v1/history/${userId}`;
  return axios.get(url, {
    headers: { Authorization: "Bearer " + token }
  });
};
