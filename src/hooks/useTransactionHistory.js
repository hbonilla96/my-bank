import { useEffect, useState } from "react";
import { getUserTransactions } from "../services/transactionService";

export const useTransactionHistory = () => {
  const [transactions, setTransaction] = useState();

  useEffect(() => {
    getUserTransactions().then(res => {
      setTransaction(res.data);
    });
  }, []);
  return {
    transactions
  };
};
