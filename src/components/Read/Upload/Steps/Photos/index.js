import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 15,
    },
});

class UploadStepsPhotos extends Component {
    render() {
        const { classes, values, backStep, nextStep } = this.props;

        return(
            <div>
                <Paper className={classes.root}>
                    <Typography color="secondary" variant="title">
                        Zdjęcia przepisu
                    </Typography>

                    <div className="upload-recipe">
                        {values.recipe_name}
                        {values.recipe_description}
                        {values.recipe_level}
                        {values.recipe_time}
                    </div>
                </Paper>

                <div className="steps-button">
                    <Button variant="text" onClick={backStep}>Wstecz</Button>
                    <Button disabled={values.error === 0} variant="contained" color="primary" onClick={nextStep}>Dalej</Button>
                </div>
            </div>
        );
    };
}

UploadStepsPhotos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadStepsPhotos);