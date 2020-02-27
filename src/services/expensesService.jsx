import axios from "axios";

export const getExpenses = () => {
  let userName = sessionStorage.getItem("username");
  const expenses = `http://localhost:3378/api/v1/history/expenses/${userName}`;
  let token = sessionStorage.getItem("token");

  return axios.get(expenses, {
    headers: { Authorization: "Bearer " + token }
  });
};
