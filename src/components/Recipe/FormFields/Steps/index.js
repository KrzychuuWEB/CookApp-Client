import React, { Component } from 'react';
import './steps.scss';
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

class RecipeStepsFields extends Component {
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

    stepList = () => {
        const { onChange, values, errors } = this.props;

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

    render() {
        return (
            <div className="recipe-steps-fields">
                <Tooltip title="Dodaj kolejny krok" aria-label="Dodaj kolejny krok">
                    <Fab onClick={this.addNewStep} size="small" className="fab-icon" color="primary">
                        <AddIcon />
                    </Fab>
                </Tooltip>

                { this.stepList() }
            </div>
        );
    }
}

export default RecipeStepsFields;