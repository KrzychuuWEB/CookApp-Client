import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import AddNewField from "./AddNewField";

const styles = theme => ({
    root: {
        position: 'relative',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 15,
    },
    fab: {
        position: 'absolute',
        top: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

class UploadStepsIngredients extends Component {
    state = {
        ingredients: {},
        errors: {},

    };

    setDefaultValue = index => {
        let ingredients = {
            ...this.state.ingredients,
            [index]: {
                ...this.state.ingredients[index],
                name: '',
                value: '',
                unit: 1,
            }
        };

        this.setState({ingredients});
    };

    deleteIngredients = index => {
        let ingredients = {
            ...this.state.ingredients,
        };

        delete ingredients[index];

        this.setState({ingredients});
    };

    onChange = (index, input) => e => {
        let ingredients = {
            ...this.state.ingredients,
            [index]: {
                ...this.state.ingredients[index],
                [input]: e.target.value,
            }
        };

        this.setState({ingredients});
    };

    validate = () => {
        let values = this.state.ingredients;
        let isError = false;
        let setErrors = {};

        for(let key of Object.keys(values)) {
            if(values[key]['name'].length < 1) {
                setErrors['error_name' + key] = "Pole jest wymagane!";
            }

            if(values[key]['value'].length < 1) {
                setErrors['error_value' + key] = "Pole jest wymagane!";
            }

            if(values[key]['unit'].length < 1) {
                setErrors['error_unit' + key] = "Pole jest wymagane!";
            }
        }

        this.setState({errors: setErrors});
        return isError;
    };

    onSubmit = () => {
        this.validate();
    };

    render() {
        const { classes, backStep } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                    <Typography color="secondary" variant="h6">
                        Informacje o składnikach
                    </Typography>

                    <div className="upload-recipe">
                        <div className="center-field">
                            <AddNewField
                                onChange={this.onChange}
                                delete={this.deleteIngredients}
                                defaultValue={this.setDefaultValue}
                                values={this.state.ingredients}
                                errors={this.state.errors}
                            />
                        </div>
                    </div>
                </Paper>

                <div className="steps-button">
                    <Button
                        variant="text"
                        onClick={backStep}
                    >Wróć</Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.onSubmit}
                    >Dalej</Button>
                </div>
            </div>
        );
    };
}

UploadStepsIngredients.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadStepsIngredients);