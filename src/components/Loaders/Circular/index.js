import React, { Component } from 'react';
import './circular.scss';
import {CircularProgress} from "@material-ui/core";

class CircularLoader extends Component {
    render() {
        return (
            <div className="circular-loader-container">
                <div>
                    <CircularProgress />
                </div>
            </div>
        );
    }
}

export default CircularLoader;
