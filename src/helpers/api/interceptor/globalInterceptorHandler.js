import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import {destroyUserStorage, getUserToken} from "../../storage/user.storage";

class GlobalInterceptorHandler extends Component {
    handleResponse = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            if(error.response) {
                if(error.response.status === 401) {
                    if(getUserToken()) {
                        destroyUserStorage();
                    }

                    this.props.history.push("/login");
                }
            }

            return Promise.reject(error);
        });
    };

    handleRequest = () => {
        axios.interceptors.request.use((config) => {
            const token = getUserToken();

            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        }, (error) => {
            return Promise.reject(error);
        });
    };

    render() {

        return (
            <div>
                {this.handleResponse()}
                {this.handleRequest()}

                {
                    this.props.children
                }
            </div>
        );
    }
}

export default withRouter(GlobalInterceptorHandler);