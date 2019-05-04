import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './upload.scss';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import UploadStepsInformation from "../../../components/Recipe/Upload/Steps/Information";
import UploadStepsPhotos from "../../../components/Recipe/Upload/Steps/Photos";
import UploadStepsIngredients from "../../../components/Recipe/Upload/Steps/Ingredients";
import UploadStepByStep from "../../../components/Recipe/Upload/Steps/Steps";
import {
    defaultValues,
    deleteValue,
    changeValueIngredientsOrSteps,
    changeValueInformationOrPhotos
} from "../../../helpers/recipe.function";
import * as recipeApi from '../../../helpers/api/recipe.api';
import {Snackbar} from "@material-ui/core";
import MySnackbarContent from "../../../components/Snackbars";
import ChangeContentIfError from "../../../helpers/api/interceptor/changeContentIfError";
import {ingredientDTO} from "../../../helpers/api/DTO/ingredientDTO";

function getSteps() {
    return [
        'Informacje o przepisie',
        'Zdjęcia przepisu',
        'Składniki przepisu',
        'Kroki do stworzenia przepisu',
    ];
}

class UploadRecipe extends Component {
    state = {
        activeStep: 1,
        values: {
            recipe_name: '1',
            recipe_description: '1',
            recipe_level: 1,
            recipe_time: 2,
            photos: {},
            ingredients: [
                {
                    name: '1',
                    value: '1',
                    unit: "kg",
                    ingredient: 1,
                },
            ],
            steps: [
                {
                    name: '1',
                    description: '1',
                    step: 1,
                },
            ],
        },
        snackbar: {
            open: false,
            message: '',
            variant: '',
        },
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

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <UploadStepsInformation
                    values={this.state.values}
                    nextStep={this.handleNext}
                    onChange={this.onChangeInformationOrPhotos}
                />;

            case 1:
                return <UploadStepsPhotos
                    values={this.state.values}
                    onChange={this.onChangeInformationOrPhotos}
                    backStep={this.handleBack}
                    nextStep={this.handleNext}
                />;

            case 2:
                return <UploadStepsIngredients
                    values={this.state.values}
                    setDefaultValues={this.setDefaultValues}
                    deleteValue={this.deleteValue}
                    onChange={this.onChangeIngredientsOrSteps}
                    backStep={this.handleBack}
                    nextStep={this.handleNext}
                />;

            case 3:
                return <UploadStepByStep
                    values={this.state.values}
                    setDefaultValues={this.setDefaultValues}
                    deleteValue={this.deleteValue}
                    onChange={this.onChangeIngredientsOrSteps}
                    backStep={this.handleBack}
                    nextStep={this.handleNext}
                />;
            default:
                return 'Unknown stepIndex';
        }
    }

    uploadRecipe = async () => {
        let formData = new FormData();
        let values = this.state.values;

        formData.append('name', values.recipe_name);
        formData.append('description', values.recipe_description);
        formData.append('level', values.recipe_level);
        formData.append('time', values.recipe_time);

        for (let key = 0; key < Object.keys(values.photos).length; key++) {
            formData.append("images[]", values.photos[key]);
        }

        for (let key = 0; key < Object.keys(values.ingredients).length; key++) {
            formData.append("ingredients[]", JSON.stringify(ingredientDTO(values.ingredients[key])));
        }

        for (let key = 0; key < Object.keys(values.steps).length; key++) {
            formData.append("steps[]", JSON.stringify(values.steps[key]));
        }

        await recipeApi.createRecipe(formData)
            .then(response => {
                this.setState({activeStep: 0});

                this.props.history.push(`/recipe/${response.data.slug}`);
            })
            .catch(error => {
                this.setState({snackbar: {
                        open: true,
                        message: error.response.data.error,
                        variant: 'error',
                    }
                });

                console.log(error.response.data);
            })
    };

    closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({snackbar: {
                open: false,
                message: '',
                variant: '',
            }
        });
    };

    render() {
        const steps = getSteps();
        const { activeStep, snackbar } = this.state;
        const styleButton = {
            marginTop: '25px',
        };

        return(
            <ChangeContentIfError>
                <div className="upload-container">
                    <Stepper className="steppers-box-shadow" activeStep={activeStep} alternativeLabel>
                        {steps.map(label => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    <div>
                        {this.state.activeStep === steps.length ? (
                            <div style={styleButton}>
                                <Button onClick={this.handleReset}>Wyczyść</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.uploadRecipe}>Dodaj przepis</Button>

                                {
                                    snackbar.open &&
                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        open={snackbar.open}
                                    >
                                        <MySnackbarContent
                                            onClose={this.closeSnackbar}
                                            variant={snackbar.variant}
                                            message={snackbar.message}
                                        />
                                    </Snackbar>
                                }
                            </div>
                        ) : (
                            <div>
                                <form noValidate autoComplete="off">
                                    {this.getStepContent(activeStep)}
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </ChangeContentIfError>
        );
    };
}

export default withRouter(UploadRecipe);