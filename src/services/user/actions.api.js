import {loginUserURL, RefreshTokenUserURL, RegisterUserURL} from "../api/routes.api";
import * as api from "../api/api";

export const loginUser = (params) => api.post(loginUserURL, params);
export const createUser = (params) => api.post(RegisterUserURL, params);
export const refreshTokenUser = (params) => api.post(RefreshTokenUserURL, params);