import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import { TextField } from "@material-ui/core";
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

class UploadStepsIngredients extends Component {
    state = {
        errors: {},
    };

    addNewIngredient = () => {
        let lastElement = this.props.values.ingredients.length;

        if(lastElement > 0) {
            this.props.setDefaultValues(lastElement+1, "ingredients");
        } else {
            this.props.setDefaultValues(1, "ingredients");
        }
    };

    deleteIngredient = index => e => {
        this.props.deleteValue(index, "ingredients");
    };

    validation = () => {
        const values = this.props.values.ingredients;
        let setErrors = {};
        let isValid = true;

        for(let key of Object.keys(values)) {
            if(values[key].name.length < 1) {
                setErrors['ingredients_name' + values[key].ingredient] = "Pole jest wymagane!";
                isValid = false;
            }

            if(values[key].value.length < 1) {
                setErrors['ingredients_value' + values[key].ingredient] = "Pole jest wymagane!";
                isValid = false;
            }

            if(values[key].unit.length < 1) {
                setErrors['ingredients_unit' + values[key].ingredient] = "Pole jest wymagane!";
                isValid = false;
            } else if(!Number.isInteger(parseInt(values[key].unit))) {
                setErrors['ingredients_unit' + values[key].ingredient] = "Zawartość musi być liczbowa!";
                isValid = false;
            }
        }

        this.setState({errors: setErrors});
        return isValid;
    };

    listField = () => {
        const { values, onChange } = this.props;
        const { errors } = this.state;

        const listField = values.ingredients.map((item) =>
            <div key={item.ingredient} className="ingredient-margin">
                <TextField
                    className="ingredientsInput"
                    label="Nazwa składnika"
                    onChange={onChange(item.ingredient, "name", "ingredients")}
                    value={item.name}
                    error={!!errors['ingredients_name' + item.ingredient]}
                    helperText={errors['ingredients_name' + item.ingredient]}
                />
                <TextField
                    label="Wartość"
                    className="valueInput"
                    onChange={onChange(item.ingredient, "value", "ingredients")}
                    value={item.value}
                    error={!!errors['ingredients_value' + item.ingredient]}
                    helperText={errors['ingredients_value' + item.ingredient]}
                />
                <FormControl className="unitInput" error={!!errors['ingredients_unit' + item.ingredient]}>
                    <InputLabel htmlFor="unit-label">Jednostka</InputLabel>
                    <Select
                        onChange={onChange(item.ingredient, "unit", "ingredients")}
                        value={item.unit}
                        inputProps={{
                            name: 'unit',
                            id: 'unit-label',
                        }}
                    >
                        <MenuItem value={1}>kg</MenuItem>
                        <MenuItem value={2}>g</MenuItem>
                        <MenuItem value={3}>łyżek</MenuItem>
                    </Select>
                    <FormHelperText>{errors['ingredients_unit' + item.ingredient]}</FormHelperText>
                </FormControl>

                <IconButton aria-label="delete-ingredients" onClick={this.deleteIngredient(item.ingredient)}>
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

    onSubmit = () => {
        let validate = this.validation();

        if(validate) {
            this.props.nextStep();
        } else {
            return false;
        }
    };

    render() {
        const { backStep } = this.props;

        return (
            <div>
                <Paper className="upload-box">
                    <Typography color="secondary" variant="h6">
                        Informacje o składnikach
                    </Typography>

                    <div className="upload-recipe">
                        <div className="center-field">
                            <div>
                                <Tooltip title="Dodaj kolejny składnik" aria-label="Dodaj kolejny skladnik">
                                    <Fab onClick={this.addNewIngredient} size="small" className="fab-icon" color="primary">
                                        <AddIcon />
                                    </Fab>
                                </Tooltip>

                                { this.listField() }
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
                    >Dalej</Button>
                </div>
            </div>
        );
    };
}

export default UploadStepsIngredients;