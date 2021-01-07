import axios from "axios";

export default axios.create({
  withCredentials: false,
  baseURL: `https://card-api.syakir.dev`,
});
