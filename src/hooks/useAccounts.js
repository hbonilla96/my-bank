import { useEffect, useState } from "react";
import { getAccounts } from "../services/accountService";

export const useAccounts = () => {
  const [accounts, setAccounts] = useState();

  useEffect(() => {
    getAccounts().then(res => {
      setAccounts(res.data);
    });
  }, []);
  return {
    accounts
  };
};
