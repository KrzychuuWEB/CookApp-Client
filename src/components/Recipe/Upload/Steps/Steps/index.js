import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Fab from "@material-ui/core/es/Fab/Fab";
import AddIcon from '@material-ui/icons/Add';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import TextField from "@material-ui/core/es/TextField/TextField";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import {FormHelperText} from "@material-ui/core";

class UploadStepByStep extends Component {
    state = {
        errors: {},
    };

    addNewStep = () => {
        let lastElement = this.props.values.steps.length;

        if(lastElement > 0) {
            this.props.setDefaultValues(lastElement+1, "steps");
        } else {
            this.props.setDefaultValues(1, "steps");
        }
    };

    deleteStep = index => e => {
        this.props.deleteValue(index, "steps");
    };

    validation = () => {
        const values = this.props.values.steps;
        let setErrors = {};
        let isValid = true;

        for(let key of Object.keys(values)) {
            if(values[key].name.length < 1) {
                setErrors['step_name' + values[key].step] = "Pole jesy wymagane!";
                isValid = false;
            }

            if(values[key].description.length < 1) {
                setErrors['step_description' + values[key].step] = "Pole jest wymagane!";
                isValid = false;
            }
        }

        this.setState({errors: setErrors});
        return isValid;
    };

    stepList = () => {
        const { onChange, values } = this.props;
        const { errors } = this.state;

        const list = values.steps.map((item) =>
            <div key={item.step}>
                <div>
                    <FormControl className="field-width-with-delete-icon" error={!!errors['step_name' + item.step]}>
                        <InputLabel htmlFor="adorment-name">Nazwa kroku</InputLabel>
                        <Input
                            value={item.name}
                            onChange={onChange(item.step, "name", "steps")}
                            id="adorment-name"
                            startAdornment={<InputAdornment position="start">{ item.step + "." }</InputAdornment>}
                        />
                        <FormHelperText>{errors['step_name' + item.step]}</FormHelperText>
                    </FormControl>

                    <IconButton onClick={this.deleteStep(item.step)}>
                        <DeleteIcon />
                    </IconButton>
                </div>

                <TextField
                    label="Opis kroku"
                    multiline
                    rows="4"
                    margin="normal"
                    className="step-input"
                    value={item.description}
                    onChange={onChange(item.step, "description", "steps")}
                    error={!!errors['step_description' + item.step]}
                    helperText={errors['step_description' + item.step]}
                />

                <span className="step-line" />
            </div>
        );

        return (
            <div className="stepbystep-field-container">
                { list }
            </div>
        );
    };

    onSubmit = () => {
        let validate = this.validation();

        if(validate) {
            console.log(this.props.values);
        } else {
            return false;
        }
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

                            <div>
                                <Tooltip title="Dodaj nowy krok" aria-label="Dodaj nowy krok">
                                    <Fab onClick={this.addNewStep} size="small" className="fab-icon" color="primary">
                                        <AddIcon />
                                    </Fab>
                                </Tooltip>

                                { this.stepList() }
                            </div>

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