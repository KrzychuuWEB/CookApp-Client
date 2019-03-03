import React, { Component } from 'react';
import './notfound.scss';
import { Link } from "react-router-dom";
import {Button, Typography} from "@material-ui/core";

class NotFound extends Component {
    render() {
        return (
            <div className="notfound-container">
               <div className="notfound-text">
                   <Typography color="primary" variant="h1">
                       404
                   </Typography>

                   <Typography>
                       Strona nie została znaleziona
                   </Typography>

                   <Button component={Link} to="/" variant="outlined" color="primary">wróć do strony głównej</Button>
               </div>
            </div>
        );
    }
}

export default NotFound;