import axios from "axios";

import { API_BASE_URL } from "../configs";

export const librariesServiceOpenClient = axios.create({
  baseURL: API_BASE_URL,
});
