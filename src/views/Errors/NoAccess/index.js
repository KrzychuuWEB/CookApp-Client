import React, { Component } from 'react';
import './noaccess.scss';
import {Icon, Typography} from "@material-ui/core";
import {SentimentVeryDissatisfied} from "@material-ui/icons";

class NoAccessError extends Component {
    render() {
        return (
            <div className="no-access-container">
                <div>
                    <Icon>
                        <SentimentVeryDissatisfied color="error" className="no-access-icon" />
                    </Icon>
                </div>

                <div className="no-access-text">
                    <Typography variant="body2">
                        Przepraszamy, ale nie masz dostępu do tego zasobu!
                    </Typography>
                </div>
            </div>
        );
    }
}

export default NoAccessError;