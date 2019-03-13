import React, { Component } from 'react';
import './information.scss';
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";

class RecipeInformationFields extends Component {
    render() {
        const { errors, values, onChange } = this.props;

        return (
            <div className="recipe-information-fields">
                <TextField
                    onChange={onChange('recipe_name')}
                    className="information-field"
                    label="Nazwa przepisu"
                    name="recipe_name"
                    value={values.recipe_name}
                    error={!!errors.recipe_name}
                    helperText={errors.recipe_name}
                />

                <TextField
                    onChange={onChange('recipe_description')}
                    className="information-field"
                    name="recipe_description"
                    label="Opis przepisu"
                    multiline
                    rows="4"
                    value={values.recipe_description}
                    error={!!errors.recipe_description}
                    helperText={errors.recipe_description}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{values.recipe_description.length+"/250"}</InputAdornment>
                    }}
                />

                <FormControl className="information-field" error={!!errors.recipe_level}>
                    <InputLabel htmlFor="recipe_level_label">Poziom trudności</InputLabel>
                    <Select
                        value={values.recipe_level}
                        onChange={onChange('recipe_level')}
                        inputProps={{
                            name: 'recipe_level',
                            id: 'recipe_level_label',
                        }}
                    >
                        <MenuItem value={1}>Łatwy</MenuItem>
                        <MenuItem value={2}>Średni</MenuItem>
                        <MenuItem value={3}>Trudny</MenuItem>
                    </Select>
                    <FormHelperText>{errors.recipe_level}</FormHelperText>
                </FormControl>

                <TextField
                    onChange={onChange('recipe_time')}
                    name="recipe_time"
                    type="number"
                    className="information-field"
                    label="Czas przygotowania przepisu"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Minut</InputAdornment>
                    }}
                    value={values.recipe_time}
                    error={!!errors.recipe_time}
                    helperText={errors.recipe_time}
                />
            </div>
        );
    }
}

export default RecipeInformationFields;