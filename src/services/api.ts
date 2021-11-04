import axios from "axios";

export const api = axios.create({
  baseURL: "https://pcts-documents-api-dev.herokuapp.com/api/documents/",
});

export const apiCrawlers = axios.create({
  baseURL: "https://pcts-scrapers-dev.herokuapp.com/api/",
});

export default api;
