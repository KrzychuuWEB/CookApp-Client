import { loginApiUrl } from './routes';
import * as api from './api';

export const login = (params) => api.post(loginApiUrl, params);