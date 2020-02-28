import axios from "axios";

export const user = data => {
  const authEndpoint = "http://localhost:3378/api/v1/user";
  const token = sessionStorage.getItem("token");
  return axios.post(authEndpoint, data);
};

export const changePassword = data => {
  const token = sessionStorage.getItem("token");
  const passwordUrl = "http://localhost:3378/api/v1/user/update-password";
  return axios.put(passwordUrl, data, {
    headers: { Authorization: "Bearer " + token }
  });
};
