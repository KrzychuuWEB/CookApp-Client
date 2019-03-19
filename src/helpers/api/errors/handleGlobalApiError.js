import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class HandleGlobalApiError extends Component {
    handleResponse = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            if(error.response.status === 401) {
                this.props.history.push("/login");
            } else if(error.response.status === 404) {
                this.props.history.push("/not-found");
            }

            return Promise.reject(error);
        });
    };

    render() {

        return (
            <div>
                {this.handleResponse()}

                {
                    this.props.children
                }
            </div>
        );
    }
}

export default withRouter(HandleGlobalApiError);