import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import {SnackbarContent, IconButton} from "@material-ui/core";
import { CheckCircle, Warning, Error, Close } from "@material-ui/icons";
import clsx from 'clsx';
import { amber } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    success: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const variantIcon = {
    success: CheckCircle,
    warning: Warning,
    error: Error,
};

const MUISnackbar = ({ className, variant, message, onClose, ...other }) => {
    const classes = useStyles();
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
        </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <Close className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
};

MUISnackbar.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'success', 'warning']).isRequired,
};

export default MUISnackbar;