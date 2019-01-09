import React, { Component } from 'react';
import PropTypes from "prop-types";
import {TextField, withStyles} from "@material-ui/core";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/es/Fab/Fab";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";

const styles = theme => ({
    fab: {
        position: 'absolute',
        top: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

class AddNewField extends Component {
    state = {
        amountField: [],
        errorName: [],
    };

    deleteField = index => e => {
        e.preventDefault();

        const amountField = this.state.amountField;
        amountField.splice(amountField.indexOf(index), 1);

        this.props.delete(index);
        this.setState({amountField});
    };

    addNewField = () => {
        let lastNumber = this.state.amountField.slice(-1)[0];

        this.state.amountField.length > 0 ?
            this.setState({amountField: [...this.state.amountField, lastNumber + 1]}) :
            this.setState({amountField: [0]});

        lastNumber === undefined ? this.props.defaultValue(0) : this.props.defaultValue(lastNumber + 1);
    };

    listField = () => {
        const amounts = this.state.amountField;
        const { values, errors } = this.props;

        const listField = amounts.map((key) =>
            <div key={key}>
                <TextField
                    className="ingredientsInput"
                    label="Nazwa składnika"
                    onChange={this.props.onChange(key, "name")}
                    value={values[key]["name"]}
                    error={!!errors['error_name'+key]}
                    helperText={errors['error_name'+key]}
                />
                <TextField
                    label="Wartość"
                    className="valueInput"
                    onChange={this.props.onChange(key, "value")}
                    value={values[key]["value"]}
                    error={!!errors['error_value'+key]}
                    helperText={errors['error_value'+key]}
                />
                <FormControl className="unitInput" error={!!errors['error_unit'+key]}>
                    <InputLabel htmlFor="unit-label">Jednostka</InputLabel>
                    <Select
                        onChange={this.props.onChange(key, "unit")}
                        value={values[key]["unit"]}
                        inputProps={{
                            name: 'unit',
                            id: 'unit-label',
                        }}
                    >
                        <MenuItem value={1}>kg</MenuItem>
                        <MenuItem value={2}>g</MenuItem>
                        <MenuItem value={3}>łyżek</MenuItem>
                    </Select>
                    <FormHelperText>{errors['error_unit'+key]}</FormHelperText>
                </FormControl>
                <IconButton aria-label="delete-ingredients" onClick={this.deleteField(key)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        );

        return (
            <div>
                {listField}
            </div>
        );
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                {
                   this.listField()
                }
                <Tooltip title="Dodaj kolejny składnik" aria-label="Dodaj kolejny skladnik">
                    <Fab onClick={this.addNewField} size="small" className={classes.fab} color="primary">
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
        );
    }
}

AddNewField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddNewField);