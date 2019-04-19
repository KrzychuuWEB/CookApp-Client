import * as api from './api';
import {changeUserPasswordUrl, updateUserAccountUrl} from "./routes";

export const updateAccount = (username, params) => api.put(updateUserAccountUrl + username, params);
export const changePassword = (username, params) => api.put(changeUserPasswordUrl(username), params);