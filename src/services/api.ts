import axios from "axios";

const api = axios.create({
  baseURL: "https://pcts-documents-api-dev.herokuapp.com/api/documents/",
});

export default api;
