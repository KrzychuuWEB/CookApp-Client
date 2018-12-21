import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 15,
    },

    field: {
        width: '100%',
        marginBottom: 15,
    },
});

class UploadStepsIngredients extends Component {
    render() {
        const { classes, values } = this.props;

        return (
            <Paper className={classes.root}>
                <Typography color="secondary" variant="title">
                    Informacje o składnikach
                </Typography>

                <div className="upload-recipe">

                </div>
            </Paper>
        );
    };
}

UploadStepsIngredients.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadStepsIngredients);