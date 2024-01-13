import axios from "axios";
import { errorCatch, getContentType } from "@/api/core/helper.ts";
import { getAccessToken } from "@/api/services/auth.helper.ts";

const instance = axios.create({
  baseURL: "http://localhost:8888",
  headers: getContentType(),
});

instance.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken();
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        return instance.request(originalRequest);
      } catch (err) {
        if (errorCatch(err) === "jwt expired") {
          //
        }
      }
      throw error;
    }
  },
);

export default instance;
