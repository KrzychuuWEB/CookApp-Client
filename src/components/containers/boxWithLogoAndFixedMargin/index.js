import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '8%',
    },
    paper: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20,
    },
    logo: {
        marginBottom: 120,
    },
    title: {
        marginTop: 10,
        marginBottom: 20,
    },
}));

function BoxWithLogoAndFixedMargin({ children, title }) {
    const classes = useStyles();

    return (
       <div className={classes.root}>
           <Typography
               variant="h2"
               color="primary"
               align="center"
               className={classes.logo}
           >
               ECookHub
           </Typography>

           <Paper className={classes.paper}>
               <Typography color="primary" variant="h6" className={classes.title}>
                   { title }
               </Typography>

               { children }
           </Paper>
       </div>
    );
}

export default BoxWithLogoAndFixedMargin;