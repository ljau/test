import { useEffect } from "react";
import axios from "axios"
export const useAxios = () => {
  useEffect(() => {
    axios.interceptors.response.use(
      (config) => {
        config.headers["Content-Type"] = "application/json";
        return config;
      },
      (error) => Promise.reject(error)
    );
  });
};
