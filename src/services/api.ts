import axios from "axios";

export const apiDocuments = axios.create({
  baseURL: "https://pcts-documents-api-dev.herokuapp.com/",
});

export const apiCrawlers = axios.create({
  baseURL: "https://pcts-scrapers-dev.herokuapp.com/",
});
