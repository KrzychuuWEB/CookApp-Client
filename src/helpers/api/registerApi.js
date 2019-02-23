import { registerApiUrl } from './routes';
import * as api from './api';

export const create = (params) => api.post(registerApiUrl, params);