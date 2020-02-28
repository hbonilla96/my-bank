import axios from "axios";

export const getExpenses = () => {
  let userName = sessionStorage.getItem("username");
  const expenses = `https://agnatebankapi.herokuapp.com/api/v1/history/expenses/${userName}`;
  let token = sessionStorage.getItem("token");

  return axios.get(expenses, {
    headers: { Authorization: "Bearer " + token }
  });
};
