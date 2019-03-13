import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import {isFormValid} from "../../../../../helpers/validations";
import {validRecipeStepsDescription, validRecipeStepsName} from "../../../../../helpers/validations/recipe.validations";
import RecipeStepsFields from "../../../FormFields/Steps";

class UploadStepByStep extends Component {
    state = {
        errors: {},
    };

    validation = () => {
        const { steps } = this.props.values;
        let errors = {};

        for(let key of Object.keys(steps)) {
            validRecipeStepsName(errors, steps[key]);
            validRecipeStepsDescription(errors, steps[key]);
        }

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    onSubmit = () => {
        let validate = this.validation();

        if(validate) {
            console.log(this.props.values);
        } else {
            return false;
        }
    };

    render() {
        const { backStep, values, onChange, setDefaultValues, deleteValue } = this.props;
        const { errors } = this.state;

        return (
            <div>
                <Paper className="upload-box">
                    <Typography variant="h6" color="secondary">
                        Informacje o krokach
                    </Typography>

                    <div className="upload-recipe">
                        <div className="center-field">
                            <RecipeStepsFields
                                values={values}
                                errors={errors}
                                onChange={onChange}
                                setDefaultValues={setDefaultValues}
                                deleteValue={deleteValue}
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
                    >Dodaj przepis</Button>
                </div>
            </div>
        );
    }
}

export default UploadStepByStep;