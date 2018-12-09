import React, { Component } from 'react';
import './readrecipe.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import { MoreVert } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import deepOrange from "@material-ui/core/es/colors/deepOrange";
import Typography from "@material-ui/core/es/Typography/Typography";

class ReadRecipe extends Component {
    render() {
        return(
            <Paper className="container">
                <Grid container justify="space-between" alignItems="flex-start">
                    <div>
                        <Grid container justify="space-between">
                            <Avatar style={{backgroundColor: deepOrange[500]}}>K</Avatar>
                            <div className="avatar-info">
                                <Typography variant="subtitle2">
                                    KrzychuuWEB
                                </Typography>
                                <Typography variant="caption">
                                    2018-12-09 14:55
                                </Typography>
                            </div>
                        </Grid>
                    </div>

                    <IconButton className="icon-position">
                        <MoreVert />
                    </IconButton>
                </Grid>
            </Paper>
        );
    };
}

export default ReadRecipe;