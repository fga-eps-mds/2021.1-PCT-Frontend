import axios from "axios";
import { getUserToken } from "../utils/userAuthentication";


export const apiDocuments = axios.create({
  baseURL: "https://pcts-documents-api-dev.herokuapp.com/",
});

export const apiCrawlers = axios.create({
  // baseURL: "https://pcts-scrapers-dev.herokuapp.com/",
  baseURL: "http://localhost:8002/",
  headers: {'Authorization': `Bearer ${getUserToken()}`}
});
