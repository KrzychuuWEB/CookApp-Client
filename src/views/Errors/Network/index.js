import React, { Component } from 'react';
import './network.scss';
import {Icon, Typography} from "@material-ui/core";
import {Error} from "@material-ui/icons";

class NetworkError extends Component {
    render() {
        return (
            <div className="network-error-container">
                <div>
                    <Icon>
                        <Error color="error" className="network-error-icon" />
                    </Icon>
                </div>

                <div>
                    <Typography variant="body2">
                        Wystąpił błąd z połączeniem po stronie serwera, przepraszamy za niedogodności!
                    </Typography>
                </div>
            </div>
        );
    }
}

export default NetworkError;