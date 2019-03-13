import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography";
import Button from "@material-ui/core/es/Button/Button";
import {isFormValid} from "../../../../../helpers/validations";
import {
    validRecipePhotosExtension,
    validRecipePhotosLength
} from "../../../../../helpers/validations/recipe.validations";
import RecipePhotosFields from "../../../FormFields/Photos";

class UploadStepsPhotos extends Component {
    state = {
        skipPhoto: false,
        errors: {},
    };

    validation = () => {
        const {photos} = this.props.values;
        let errors = {};

        validRecipePhotosExtension(errors, photos);
        validRecipePhotosLength(errors, photos);

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    onSubmit = () => {
        let skipPhoto = this.state.skipPhoto;
        let checkError = this.validation();

        if(skipPhoto) {
            this.props.nextStep();
        } else {
            if(checkError) {
                this.props.nextStep();
            } else {
                return false;
            }
        }
    };

    onChangeSkipPhoto = e => {
        this.setState({skipPhoto: e.target.checked})
    };

    render() {
        const { backStep, values, onChange } = this.props;
        const { errors, skipPhoto } = this.state;

        return(
            <div>
                <Paper className="upload-box">
                    <Typography color="secondary" variant="h6">
                        Zdjęcia przepisu
                    </Typography>

                    <div className="upload-recipe">
                        <RecipePhotosFields
                            onChange={onChange}
                            errors={errors}
                            values={values}
                            skipPhoto={skipPhoto}
                            onChangeSkipPhoto={this.onChangeSkipPhoto}
                        />
                    </div>
                </Paper>

                <div className="steps-button">
                    <Button variant="text" onClick={backStep}>Wstecz</Button>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>Dalej</Button>
                </div>
            </div>
        );
    };
}

export default UploadStepsPhotos;