import axios from "axios";

const apiScraper = axios.create({
    baseURL: "https://pcts-scrapers-dev.herokuapp.com/api/",
});

export default apiScraper;
