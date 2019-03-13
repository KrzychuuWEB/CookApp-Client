import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import {isFormValid} from "../../../../../helpers/validations";
import {
    validRecipeDescription,
    validRecipeLevel,
    validRecipeName, validRecipeTime
} from "../../../../../helpers/validations/recipe.validations";
import RecipeInformationFields from "../../../FormFields/Information";

class UploadStepsInformation extends Component {
    state = {
        errors: {},
    };

    validation = () => {
        let errors = {};
        let { values } = this.props;

        validRecipeName(errors, values);
        validRecipeDescription(errors, values);
        validRecipeLevel(errors, values);
        validRecipeTime(errors, values);

        this.setState({errors: errors});
        
        return isFormValid(errors);
    };

    onClick = () => {
        let checkError = this.validation();

        if(checkError) {
            this.props.nextStep();
        } else {
            return false;
        }
    };

    render() {
        const { onChange, values } = this.props;
        const { errors } = this.state;

        return (
            <div>
                <Paper className="upload-box">
                    <Typography color="secondary" variant="h6">
                        Informacje o przepisie
                    </Typography>

                    <div className="upload-recipe">
                        <RecipeInformationFields
                            onChange={onChange}
                            errors={errors}
                            values={values}
                        />
                    </div>
                </Paper>

                <div className="steps-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.onClick}
                    >Dalej</Button>
                </div>
            </div>
        );
    };
}

export default UploadStepsInformation;