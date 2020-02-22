import axios from "axios";

const authEndpoint = "http://localhost:3378/auth";

export const user = data => axios.post(authEndpoint, data);
