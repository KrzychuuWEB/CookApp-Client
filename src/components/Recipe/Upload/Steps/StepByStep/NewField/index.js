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
    addNewStep = () => {
        let lastElement = this.props.values.length;

        if(lastElement > 0) {
            this.props.setDefaultValues(lastElement+1);
        } else {
            this.props.setDefaultValues(1);
        }
    };

    stepDelete = index => e => {
        this.props.deleteStep(index);
    };

    stepList = () => {
        const { onChange, values } = this.props;

        const list = values.map((item) =>
            <div key={item.step}>
                <div>
                    <FormControl className="field-width-with-delete-icon">
                        <InputLabel htmlFor="adorment-name">Nazwa kroku</InputLabel>
                        <Input
                            value={item.name}
                            onChange={onChange(item.step, "name")}
                            id="adorment-name"
                            startAdornment={<InputAdornment position="start">{ item.step + "." }</InputAdornment>}
                        />
                    </FormControl>

                    <IconButton onClick={this.stepDelete(item.step)}>
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
                    onChange={onChange(item.step, "description")}
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
