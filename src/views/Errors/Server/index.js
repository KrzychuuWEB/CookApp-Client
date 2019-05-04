import React, { Component } from 'react';
import './server.scss';
import {Icon, Typography} from "@material-ui/core";
import { Storage, BugReport } from '@material-ui/icons';

class ServerError extends Component {
    render() {
        return (
            <div className="server-error-container">
                <div className="icon-position">
                    <Icon>
                        <Storage className="server-icon" color="error" />
                    </Icon>

                    <Icon>
                        <BugReport className="bug-icon" />
                    </Icon>
                </div>

                <Typography variant="body2">
                    Przepraszamy mamy chwilowe problemy z serwerem!
                </Typography>
            </div>
        );
    }
}

export default ServerError;
