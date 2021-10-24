import axios from "axios";

const Api = axios.create({
  baseURL: "https://pcts-scrapers-dev.herokuapp.com/api/scrapers/",
});

export default Api;
