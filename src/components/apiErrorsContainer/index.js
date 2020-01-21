import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Icon} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
    },
    margin: {
        marginTop: 20,
    },
    iconSize: {
        '& svg': {
            fontSize: 120,
        },
    },
}));

const Index = ({ margin, icon, title, description, actions }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{marginTop: margin ? margin : "32vh"}}>
            <Icon className={classes.iconSize} color="error">
                { icon }
            </Icon>

            <Typography variant="h5" className={classes.margin} color="error">
                { title }
            </Typography>

            <Typography variant="body1" className={classes.margin}>
                { description }
            </Typography>

            <div className={classes.margin}>
                { actions }
            </div>
        </div>
    );
};

export default Index;