import axios from "axios";

import { API_BASE_URL } from "../configs";

export const librariesServiceOpenClient = axios.create({
  baseURL: API_BASE_URL,
});

// librariesServiceOpenClient.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );
