import axios from "axios";
import {
  getUserToken,
  getUserRefreshToken,
  saveSession,
} from "../utils/userAuthentication";

const CODE_TOKEN_NOT_VALID = "token_not_valid"

const api = axios.create({
  // baseURL: "https://pcts-scrapers-dev.herokuapp.com/",
  baseURL: "http://localhost:8002/",
  headers: { Authorization: `Bearer ${getUserToken()}` },
});

const getRefreshToken = async () => {
  const dataRequest = {
    refresh: getUserRefreshToken(),
  };

  await api.post("token/refresh/", dataRequest).then((response: any) => {
    saveSession(response.data);
  });
};

const getCrawlers = async () => {
  await api.get(`api/crawlers/`).then(({ status, data }) => {
      return {
          status: status,
          data: data
      }
  }).catch(async ({data}) => {
    if (CODE_TOKEN_NOT_VALID === data["code"]) {
        await getRefreshToken();
    }
  });
};
