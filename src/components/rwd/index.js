import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: theme.spacing(1.5),

        [theme.breakpoints.down('xs')]: {
            width: '98%',
        },
        [theme.breakpoints.only('sm')]: {
            width: 750,
        },
        [theme.breakpoints.only('md')]: {
            width: 1000,
        },
        [theme.breakpoints.only('lg')]: {
            width: 1200,
        },
        [theme.breakpoints.only('xl')]: {
            width: 1500,
        },
    }
}));

function ContainerRWD({children}) {
  const classes = useStyles();

  return (
    <main className={classes.container}>
        { children }
    </main>
  );
}

export default ContainerRWD;