import React, { Component } from 'react';
import axios from 'axios';
import ServerError from "../../../views/Errors/Server";
import {Button} from "@material-ui/core";

class ChangeContentIfError extends Component {
    state = {
        error: false,
    };

    handleResponse = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            if(error.response.status >= 500) {
                this.setState({error: "Server Error"});
            }

            return Promise.reject(error);
        });
    };

    hideError = () => {
        this.setState({error: false})
    };

    render() {
        const buttonCenter = {
            display: 'flex',
            justifyContent: 'center',
        };

        const marginTop = {
            marginTop: '35vh',
        };

        return (
            <div>
                {this.handleResponse()}

                {
                    this.state.error
                        ? <div style={marginTop}>
                            <ServerError/>

                            <div style={buttonCenter}>
                                <Button
                                    onClick={this.hideError}
                                    color="secondary"
                                    variant="outlined"
                                >
                                    Spróbuj ponownie
                                </Button>
                            </div>
                        </div>
                        : this.props.children
                }
            </div>
        );
    }
}

export default ChangeContentIfError;