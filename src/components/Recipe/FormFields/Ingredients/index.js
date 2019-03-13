import React, { Component } from 'react';
import './ingredients.scss';
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

class RecipeIngredientsFields extends Component {
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

    listField = () => {
        const { values, onChange, errors } = this.props;

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

    render() {
        return (
            <div className="recipe-ingredients-fields">
                <Tooltip title="Dodaj kolejny składnik" aria-label="Dodaj kolejny skladnik">
                    <Fab onClick={this.addNewIngredient} size="small" className="fab-icon" color="primary">
                        <AddIcon />
                    </Fab>
                </Tooltip>

                { this.listField() }
            </div>
        );
    }
}

export default RecipeIngredientsFields;
