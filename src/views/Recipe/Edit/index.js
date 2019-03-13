import React, { Component } from 'react';
import './editrecipe.scss';
import {Button, Fab, Paper, Typography} from "@material-ui/core";
import RecipeInformationFields from "../../../components/Recipe/FormFields/Information";
import {
    changeValueInformationOrPhotos,
    changeValueIngredientsOrSteps,
    defaultValues,
    deleteValue
} from "../../../helpers/recipe.function";
import RecipePhotosFields from "../../../components/Recipe/FormFields/Photos";
import RecipeIngredientsFields from "../../../components/Recipe/FormFields/Ingredients";
import RecipeStepsFields from "../../../components/Recipe/FormFields/Steps";
import {isFormValid} from "../../../helpers/validations";
import {
    validRecipeDescription,
    validRecipeIngredientsName,
    validRecipeIngredientsUnit,
    validRecipeIngredientsValue,
    validRecipeLevel,
    validRecipeName,
    validRecipePhotosExtension,
    validRecipePhotosLength,
    validRecipeStepsDescription,
    validRecipeStepsName,
    validRecipeTime
} from "../../../helpers/validations/recipe.validations";
import { Save } from "@material-ui/icons";

class EditRecipe extends Component {
    state = {
        values: {
            recipe_name: '',
            recipe_description: '',
            recipe_level: 1,
            recipe_time: '',
            photos: {},
            ingredients: [
                {
                    name: '',
                    value: '',
                    unit: 1,
                    ingredient: 1,
                },
            ],
            steps: [
                {
                    name: '',
                    description: '',
                    step: 1,
                },
            ],
        },
        errors: {},
        skipPhoto: false,
    };

    setDefaultValues = (index, stepName) => {
        this.setState(defaultValues(this.state.values, index, stepName));
    };

    deleteValue = (index, stepName) => {
        this.setState(deleteValue(this.state.values, index, stepName));
    };

    onChangeIngredientsOrSteps = (index, input, stepName) => e => {
        this.setState(changeValueIngredientsOrSteps(this.state.values, index, input, stepName, e));
    };

    onChangeInformationOrPhotos = input => e => {
        this.setState(changeValueInformationOrPhotos(this.state.values, input, e));
    };

    onChangeSkipPhoto = e => {
        this.setState({skipPhoto: e.target.checked})
    };

    validation = () => {
        const { values } = this.state;
        let errors = {};
        let ingredients = values.ingredients;
        let steps = values.steps;

        validRecipeName(errors, values);
        validRecipeDescription(errors, values);
        validRecipeLevel(errors, values);
        validRecipeTime(errors, values);
        validRecipePhotosLength(errors, values);
        validRecipePhotosExtension(errors, values);

        for(let key of Object.keys(ingredients)) {
            validRecipeIngredientsName(errors, ingredients[key]);
            validRecipeIngredientsValue(errors, ingredients[key]);
            validRecipeIngredientsUnit(errors, ingredients[key]);
        }

        for(let key of Object.keys(steps)) {
            validRecipeStepsName(errors, steps[key]);
            validRecipeStepsDescription(errors, steps[key]);
        }

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    saveValues = () => {
        let checkValid = this.validation();

        if(checkValid) {
            console.log("test");
        } else {
            return false;
        }
    };

    render() {
        const { changeMode } = this.props;
        const { values, errors, skipPhoto } = this.state;

        return (
            <div className="edit-recipe">
                <div className="button-change-mode">
                    <Button
                        onClick={changeMode}
                        color="secondary"
                        variant="contained"
                    >Wyłącz tryb edycji</Button>
                </div>

                <div>
                    <Typography variant="body2">
                        Informacje o przepisie
                    </Typography>

                    <Paper className="paper">
                        <RecipeInformationFields
                            onChange={this.onChangeInformationOrPhotos}
                            errors={errors}
                            values={values}
                        />
                    </Paper>
                </div>

                <div>
                    <Typography variant="body2">
                        Zdjęcia przepisu
                    </Typography>

                    <Paper className="paper">
                        <RecipePhotosFields
                            onChange={this.onChangeInformationOrPhotos}
                            errors={errors}
                            values={values}
                            skipPhoto={skipPhoto}
                            onChangeSkipPhoto={this.onChangeSkipPhoto}
                        />
                    </Paper>
                </div>

                <div>
                    <Typography variant="body2">
                        Składniki przepisu
                    </Typography>

                    <Paper className="paper">
                        <RecipeIngredientsFields
                            values={values}
                            errors={errors}
                            deleteValue={this.deleteValue}
                            setDefaultValues={this.setDefaultValues}
                            onChange={this.onChangeIngredientsOrSteps}
                        />
                    </Paper>
                </div>

                <div>
                    <Typography variant="body2">
                        Korki do przygotowania przepisu
                    </Typography>

                    <Paper className="paper">
                        <RecipeStepsFields
                            values={values}
                            errors={errors}
                            deleteValue={this.deleteValue}
                            setDefaultValues={this.setDefaultValues}
                            onChange={this.onChangeIngredientsOrSteps}
                        />
                    </Paper>
                </div>

                <Fab onClick={this.saveValues} className="floating-button-save-recipe" color="secondary" aria-label="Save recipe">
                    <Save />
                </Fab>
            </div>
        );
    }
}

export default EditRecipe;