import CONFIG from "./config";
import Storage from "../helpers/Storage";
import axios from "axios";

export const initInterceptors = () => {
  axios.interceptors.request.use((req) => {
    req.headers["Authorization"] = `Bearer ${Storage.Token.get()}`;
    req.headers["content-type"] = "Application/json";
    req.baseURL = CONFIG.URI;
    return req;
  });

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      //   console.log(error.response.status);
      if (error.response.status === 401) {
        Storage.Token.remove();
        window.location.href = "/auth/login";
      } else {
        throw {
          message: error.response.data.message,
          status: error.response.status,
        };
      }
    }
  );
};
