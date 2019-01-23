import React, { Component } from 'react';
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

class NewFieldStepByStep extends Component {
    state = {
        fieldsNumber: [1],
    };

    stepDelete = index => e => {
        e.preventDefault();
        const fieldsNumber = this.state.fieldsNumber;
        fieldsNumber.splice(fieldsNumber.indexOf(index), 1);

        this.setState({fieldsNumber})
    };

    stepList = () => {
        const fieldsNumber = this.state.fieldsNumber;

        const list = fieldsNumber.map((key, i) =>
            <div key={key}>
                <div>
                    <FormControl className="field-width-with-delete-icon">
                        <InputLabel htmlFor="adorment-name">Nazwa kroku</InputLabel>
                        <Input
                            id="adorment-name"
                            startAdornment={<InputAdornment position="start">{ (i + 1) + "." }</InputAdornment>}
                        />
                    </FormControl>

                    <IconButton onClick={this.stepDelete(key)}>
                        <DeleteIcon />
                    </IconButton>
                </div>

                <TextField
                    label="Opis kroku"
                    multiline
                    rows="4"
                    margin="normal"
                    className="step-input"
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

    addNewStep = () => {
        let lastElement = this.state.fieldsNumber.slice(-1)[0];
        this.setState({fieldsNumber: [...this.state.fieldsNumber, lastElement + 1] });
    };

    render() {
        console.log(this.state.fieldsNumber);

        return (
            <div>
                <Tooltip title="Dodaj nowy krok" aria-label="Dodaj nowy krok">
                    <Fab onClick={this.addNewStep} size="small" className="fab-icon" color="primary">
                        <AddIcon />
                    </Fab>
                </Tooltip>

                { this.stepList() }
            </div>
        );
    }
}

export default NewFieldStepByStep;
