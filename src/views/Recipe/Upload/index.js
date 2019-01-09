import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UploadStepsInformation from "../../../components/Recipe/Upload/Steps/Information";
import UploadStepsPhotos from "../../../components/Recipe/Upload/Steps/Photos";
import UploadStepsIngredients from "../../../components/Recipe/Upload/Steps/Ingredients";

const styles = theme => ({
    root: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return [
        'Informacje o przepisie',
        'Dodaj zdjęcia przepisu',
        'Składniki przepisu',
        'Kroki do stworzenia przepisu',
    ];
}

class UploadRecipe extends Component {
    state = {
        activeStep: 2,
        values: {
            recipe_name: '',
            recipe_description: '',
            recipe_level: '',
            recipe_time: '',
            photos: {},
            ingredients: {},
        },
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
        this.setState({values: {...this.state.values, [input]: e.target.value }});
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
                    backStep={this.handleBack}
                    nextStep={this.handleNext}
                />;

            case 2:
                return <UploadStepsIngredients
                    values={this.state.values}
                    backStep={this.handleBack}
                    nextStep={this.handleNext}
                />;

            case 3:
                return '';

            default:
                return 'Uknown stepIndex';
        }
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return(
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
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
                            <Typography className={classes.instructions}>Przepis został dodany!</Typography>
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

UploadRecipe.propsTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(UploadRecipe);