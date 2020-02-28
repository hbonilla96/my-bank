import axios from "axios";

export const user = data => {
  const authEndpoint = "https://agnatebankapi.herokuapp.com/api/v1/user";
  const token = sessionStorage.getItem("token");
  return axios.post(authEndpoint, data);
};

export const changePassword = data => {
  const token = sessionStorage.getItem("token");
  const passwordUrl = "https://agnatebankapi.herokuapp.com/api/v1/user/update-password";
  return axios.put(passwordUrl, data, {
    headers: { Authorization: "Bearer " + token }
  });
};
