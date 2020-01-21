import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {Paper, Typography, IconButton} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '8%',
    },
    paper: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20,
        [theme.breakpoints.only('zero')]: {
            width: '95%',
        },
    },
    logo: {
        marginBottom: 120,
    },
    title: {
        marginTop: 10,
        marginBottom: 20,
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    iconBack: {
        marginTop: -10,
        marginRight: 10,
    },
}));

function AccountBoxWithLogo({ children, title, redirectLocation }) {
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
               <div className={classes.flex}>
                   {
                       redirectLocation && <IconButton className={classes.iconBack} component={Link} to={redirectLocation}>
                           <ArrowBack />
                       </IconButton>
                   }

                   <Typography color="primary" variant="h6" className={classes.title}>
                       { title }
                   </Typography>
               </div>

               { children }
           </Paper>
       </div>
    );
}

export default AccountBoxWithLogo;