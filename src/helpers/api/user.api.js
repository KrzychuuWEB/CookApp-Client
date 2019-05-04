import {findUserByUsernameUrl, loginApiUrl, registerApiUrl, deleteUserUrl} from './routes';
import * as api from './api';

export const getUserByUsername = (param) => api.get(findUserByUsernameUrl + param);

export const createUser = (params) => api.post(registerApiUrl, params);
export const loginUser = (params) => api.post(loginApiUrl, params);
export const deleteUser = (username) => api.deleteApi(deleteUserUrl(username));
