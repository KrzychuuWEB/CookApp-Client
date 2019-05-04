import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import ServerError from "../../../views/Errors/Server";
import {Button} from "@material-ui/core";
import NoAccessError from "../../../views/Errors/NoAccess";
import NetworkError from "../../../views/Errors/Network";

class ChangeContentIfError extends Component {
    state = {
        error: false,
    };

    handleResponse = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            let errorStatus = false;

            if(error.response) {
                if(error.response.status >= 500) {
                    errorStatus = 500;
                } else if(error.response.status === 403) {
                    errorStatus = 403;
                }
            } else {
                errorStatus = "Network";
            }

            this.setState({error: errorStatus});
            return Promise.reject(error);
        });
    };

    render() {
        const { error } = this.state;

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
                    error
                        ? <div style={marginTop}>
                            {
                                error === "Network" && <NetworkError />
                            }

                            {
                                error === 500 && <ServerError/>
                            }

                            {
                                error === 403 && <div>
                                    <NoAccessError/>

                                    <div style={buttonCenter}>
                                        <Button
                                            component={Link}
                                            to="/"
                                            color="secondary"
                                            variant="outlined"
                                        >
                                            Strona główna
                                        </Button>
                                    </div>
                                </div>
                            }


                        </div>
                        : this.props.children
                }
            </div>
        );
    }
}

export default withRouter(ChangeContentIfError);