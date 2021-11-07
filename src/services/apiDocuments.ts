import axios from "axios";

const BASE_URL = process.env.REACT_APP_DOCUMENTS_API;

export const apiDocuments = axios.create({
  baseURL: BASE_URL,
});
