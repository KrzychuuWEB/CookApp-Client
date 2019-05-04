import {createRecipeUrl, getRecipeUrl} from "./routes";
import * as api from './api';

export const createRecipe = (params) => api.post(createRecipeUrl, params, false);
export const getRecipeBySlug = (slug) => api.get(getRecipeUrl + slug);