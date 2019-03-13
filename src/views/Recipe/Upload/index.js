import React, { Component } from 'react';
import './upload.scss';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
        activeStep: 0,
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

    render() {
        const steps = getSteps();
        const { activeStep } = this.state;

        return(
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
                        <div>
                            <Typography>Przepis został dodany!</Typography>
                            <Button onClick={this.handleReset}>Wyczyść</Button>
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
        );
    };
}

export default UploadRecipe;