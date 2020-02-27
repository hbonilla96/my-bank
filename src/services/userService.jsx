import axios from "axios";

const authEndpoint = "http://localhost:3378/api/v1/user";
const passwordUrl = "http://localhost:3378/api/v1/user/update-password";

const token = sessionStorage.getItem("token");

export const user = data => axios.post(authEndpoint, data);

export const changePassword = data =>
  axios.put(passwordUrl, data, {
    headers: { Authorization: "Bearer " + token }
  });
