import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UploadStepsInformations from "../../../components/Read/Upload/Steps/Informations";
import UploadStepsPhotos from "../../../components/Read/Upload/Steps/Photos";

const styles = theme => ({
    root: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    backButton: {
        marginRight: theme.spacing.unit,
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
        activeStep: 0,
        recipe_name: '',
        recipe_description: '',
        recipe_level: '',
        recipe_time: '',
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
        this.setState({ [input]: e.target.value });
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <UploadStepsInformations
                    values={this.state}
                    nextStep={this.handleNext}
                    handleChange={this.handleChange}
                />;

            case 1:
                return <UploadStepsPhotos
                    values={this.state}
                    backStep={this.handleBack}
                    nextStep={this.handleNext}
                    handleChange={this.handleChange}
                />;

            case 2:
                return '';

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
                            {this.getStepContent(activeStep)}
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