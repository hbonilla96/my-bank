import { useEffect, useState } from "react";
import { getExpenses } from "../services/expensesService";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState();

  useEffect(() => {
    getExpenses().then(res => {
      setExpenses(res.data);
    });
  }, []);
  return {
    expenses
  };
};
