import axios from "axios";

/**base url to make requests to movies database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/",
});

export default instance;