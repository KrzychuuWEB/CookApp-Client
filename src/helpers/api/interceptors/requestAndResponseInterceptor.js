import React from "react";
import axios from "axios";
import {getUserToken, setUserToken} from "../../storage/user.storage";
import { useHistory } from "react-router-dom";
import {refreshTokenUser} from "../user.api";
import { useDispatch } from "react-redux";
import {createSnackNotification} from "../../../redux/notifications/snackbar/duck/operations";
import {logoutProcess} from "../../function/logout";
import {routePath} from "../../pages.routes";

const requestInterceptor = () => {
    axios.interceptors.request.use((config) => {
        const token = getUserToken("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, error => {
        return Promise.reject(error);
    });
};

let unauthorizedError = false;
const responseInterceptor = (history) => dispatch => {
    axios.interceptors.response.use(response => {
        return response
    }, error => {
        const originalRequest = error.config;

        if (!getUserToken("refresh_token") || !getUserToken("token")) {
            setTimeout(() => {history.push(routePath.login)}, 800);
            dispatch(createSnackNotification("error", "Aby uzyskać dostęp musisz się zalogować!"));

            return new Promise(() => {});
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (unauthorizedError) {
                unauthorizedError = false;
                return Promise.reject(error);
            }

            unauthorizedError = true;

            return refreshTokenUser({refresh_token: getUserToken("refresh_token")})
                .then(response => {
                    if (response.status === 200) {
                        setUserToken("token", response.data.token);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${getUserToken("token")}`;
                        unauthorizedError = false;

                        return axios(originalRequest);
                    }
                })
                .catch(() => {
                    logoutProcess();
                    setTimeout(() => {history.push(routePath.login)}, 800);
                    dispatch(createSnackNotification("warning", "Twoja sesja wygasła, zaloguj się ponownie!"));
                });
        }

        return Promise.reject(error);
    });
};

const GlobalInterceptorHandler = ({ children }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div>
            { requestInterceptor() }
            { dispatch(responseInterceptor(history)) }

            { children }
        </div>
    )
};

export default GlobalInterceptorHandler;