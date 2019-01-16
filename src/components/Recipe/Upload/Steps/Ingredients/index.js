import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import AddNewField from "./AddNewField";

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

    validation = () => {
        let values = this.state.ingredients;
        let isError = false;
        let setErrors = {};

        for(let key of Object.keys(values)) {
            if(values[key]['name'].length < 1) {
                setErrors['error_name' + key] = "Pole jest wymagane!";
                isError = true;
            }

            if(values[key]['value'].length < 1) {
                setErrors['error_value' + key] = "Pole jest wymagane!";
                isError = true;
            }

            if(values[key]['unit'].length < 1) {
                setErrors['error_unit' + key] = "Pole jest wymagane!";
                isError = true;
            }
        }

        this.setState({errors: setErrors});
        return isError;
    };

    onSubmit = () => {
        let isValid = this.validation();

        if(!isValid) {
            this.props.nextStep();
        } else {
            return false;
        }
    };

    render() {
        const { backStep } = this.props;

        return (
            <div>
                <Paper className="upload-box">
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

export default UploadStepsIngredients;