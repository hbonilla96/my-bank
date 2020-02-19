import axios from "axios";

const authEndpoint = "http://localhost:3378/api/v1/user";

export const user = data => axios.post(authEndpoint, data);
