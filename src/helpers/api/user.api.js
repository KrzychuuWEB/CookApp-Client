import { loginUserURL } from "./routes";
import * as api from "./api";

export const loginUser = (params) => api.post(loginUserURL, params);