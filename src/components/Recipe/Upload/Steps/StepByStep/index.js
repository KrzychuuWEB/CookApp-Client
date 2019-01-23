import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import NewFieldStepByStep from "./NewField";

class UploadStepByStep extends Component {

    onSubmit = () => {
      return true;
    };

    render() {
        const { backStep } = this.props;

        return (
            <div>
                <Paper className="upload-box">
                    <Typography variant="h6" color="secondary">
                        Informacje o krokach
                    </Typography>

                    <div className="upload-recipe">
                        <div className="center-field">
                            <NewFieldStepByStep

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