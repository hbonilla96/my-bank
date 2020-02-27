import axios from "axios";

let userName = sessionStorage.getItem("username");

const expenses = `http://localhost:3378/api/v1/history/expenses/${userName}`;

let token = sessionStorage.getItem("token");

export const getExpenses = () =>
  axios.get(expenses, {
    headers: { Authorization: "Bearer " + token }
  });
