import axios from "axios";

const apiUsers = axios.create({
  baseURL: "",
});

export default apiUsers;
