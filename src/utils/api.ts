import axios, { isAxiosError } from "axios";
import { API_PROXY_PATH } from "../consts";

axios.defaults.baseURL = API_PROXY_PATH;
axios.defaults.timeout = 10000;
axios.defaults.headers.common["Content-Type"] = "application/json";

const api = axios.create();

api.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    if (isAxiosError(err)) {
      throw err;
    }
    throw new Error("UNKNOWN_ERROR");
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (isAxiosError(err)) {
      throw err;
    }
    throw new Error("UNKNOWN_ERROR");
  }
);

export { api };
