import CONFIG from "./config";
import tokenStorage from "../helpers/tokenStorage";

export const initInterceptors = () => {
  axios.interceptors.request.use((req) => {
    req.headers["Authorization"] = `Bearer ${tokenStorage.get()}`;
    req.headers["content-type"] = "Application/json";
    req.baseURL = CONFIG.URI;
    return req;
  });

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401) {
        tokenStorage.remove();
        window.location.href = "/login";
      } else {
        throw error;
      }
    }
  );
};
