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
            recipe_level: '',
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
        const stepsValue = {
            name: '',
            description: '',
            step: index,
        };

        const ingredientsValue = {
            name: '',
            value: '',
            unit: 1,
            ingredient: index,
        };

        let newValues = [
            ...this.state.values[stepName],
            stepName === "steps" ? stepsValue : ingredientsValue
        ];

        this.setState({values: {...this.state.values, [stepName]: newValues}});
    };

    deleteValue = (index, stepName) => {
        let deleteValue = [...this.state.values[stepName]];

        deleteValue.splice(deleteValue.indexOf(index), 1);

        this.setState({values: {...this.state.values, [stepName]: deleteValue}});
    };

    onChangeValue = (index, input, stepName) => e => {
        let inputValue = e.target.value;
        let indexName = stepName === "steps" ? "step" : "ingredient";

        this.setState(state => ({
            values: {
                ...this.state.values,
                [stepName]: state.values[stepName].map(item => {
                    if (item[indexName] === index) {
                        return {...item, [input]: inputValue};
                    }

                    return item;
                })
            }
        }));
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

    handleChange = input => e => {
        input === "photo" ?
            this.setState({values: {...this.state.values, photos: e.target.files}})
            :
            this.setState({values: {...this.state.values, [input]: e.target.value}});
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <UploadStepsInformation
                    values={this.state.values}
                    nextStep={this.handleNext}
                    handleChange={this.handleChange}
                />;

            case 1:
                return <UploadStepsPhotos
                    values={this.state.values}
                    handleChange={this.handleChange}
                    backStep={this.handleBack}
                    nextStep={this.handleNext}
                />;

            case 2:
                return <UploadStepsIngredients
                    values={this.state.values}
                    setDefaultValues={this.setDefaultValues}
                    deleteValue={this.deleteValue}
                    onChange={this.onChangeValue}
                    backStep={this.handleBack}
                    nextStep={this.handleNext}
                />;

            case 3:
                return <UploadStepByStep
                    values={this.state.values}
                    setDefaultValues={this.setDefaultValues}
                    deleteValue={this.deleteValue}
                    onChange={this.onChangeValue}
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