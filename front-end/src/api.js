import axios from "axios";

export default axios.create({
    withCredentials: false,
    baseURL: `http://127.0.0.1:8000`,
});
