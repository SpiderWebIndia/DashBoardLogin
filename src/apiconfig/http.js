import axios from "axios";
import { clearStorage, getToken } from "../utils/localStorage";

const createAxios = (baseURL) => {
  const Axios = axios.create({ baseURL });

  Axios.interceptors.response.use(
    async (response) => {
      return response.data;
    },
    async (error) => {
      let originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        // if the error is 401 and hasent already been retried
        originalRequest._retry = true; // now it can be retried
        try {
          const token = getToken();
          Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          return Axios(originalRequest);
        } catch (error) {
          if (error.response.status === 401) {
            // logout dispatch
            alert("Session Expired");
            clearStorage();
          }
        }
      }
      return error.response.data;
    }
  );

  Axios.interceptors.request.use(
    async (config) => {
      const token = getToken();
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    (error) => {
      return Promise.reject(error.response.data);
    }
  );

  return Axios;
};

// Base Url
const apiurl = createAxios(
  "https://dummyjson.com/auth/" // development
);

const http = {
  apiurl,
};

export default http;
