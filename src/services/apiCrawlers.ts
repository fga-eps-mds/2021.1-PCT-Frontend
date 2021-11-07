import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { createBrowserHistory } from 'history';
import {
  getUserToken,
} from "../utils/userAuthentication";

export const apiCrawlers = axios.create({
  // baseURL: "https://pcts-scrapers-dev.herokuapp.com/",
  baseURL: "http://localhost:8002/",
});

const logout = () => {
  console.log("Deslogar usuario");
  localStorage.clear();
  createBrowserHistory().push('/login');
  window.location.reload();
};

apiCrawlers.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    console.log("Starting Request");
    const authorization = `Bearer ${getUserToken()}`;

    request.headers = {
      "Authorization": authorization || "",
    };

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const UNAUTHORIZED = 401;

apiCrawlers.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Receive Response");
    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status;

    if (UNAUTHORIZED === status) {
      logout();
    }
    return Promise.reject(error);
  }
);
