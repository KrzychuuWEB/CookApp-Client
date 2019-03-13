import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import {isFormValid} from "../../../../../helpers/validations";
import {
    validRecipeIngredientsName, validRecipeIngredientsUnit,
    validRecipeIngredientsValue
} from "../../../../../helpers/validations/recipe.validations";
import RecipeIngredientsFields from "../../../FormFields/Ingredients";

class UploadStepsIngredients extends Component {
    state = {
        errors: {},
    };

    validation = () => {
        const {ingredients} = this.props.values;
        let errors = {};

        for(let key of Object.keys(ingredients)) {
            validRecipeIngredientsName(errors, ingredients[key]);
            validRecipeIngredientsValue(errors, ingredients[key]);
            validRecipeIngredientsUnit(errors, ingredients[key]);
        }

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    onSubmit = () => {
        let validate = this.validation();

        if(validate) {
            this.props.nextStep();
        } else {
            return false;
        }
    };

    render() {
        const { backStep, values, setDefaultValues, deleteValue, onChange} = this.props;
        const { errors } = this.state;

        return (
            <div>
                <Paper className="upload-box">
                    <Typography color="secondary" variant="h6">
                        Informacje o składnikach
                    </Typography>

                    <div className="upload-recipe">
                        <div className="center-field">
                            <RecipeIngredientsFields
                                values={values}
                                setDefaultValues={setDefaultValues}
                                deleteValue={deleteValue}
                                onChange={onChange}
                                errors={errors}
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