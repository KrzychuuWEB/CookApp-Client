import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Button from "@material-ui/core/es/Button/Button";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";

class UploadStepsInformation extends Component {
    state = {
        errors: {},
    };

    validation = () => {
        let errors = { ...this.state };
        let { values } = this.props;
        let isError = false;

        if(values.recipe_name.length < 1) {
            isError = true;
            errors.recipe_name = "Pole jest wymagane!"
        }

        if(values.recipe_description.length < 1) {
            isError = true;
            errors.recipe_description = "Pole jest wymagane!"
        } else if(values.recipe_description.length > 250) {
            isError = true;
            errors.recipe_description = "Pole nie może zawierać więcej niż 250 znaków!!"
        }

        if(values.recipe_level < 1) {
            isError = true;
            errors.recipe_level = "Pole jest wymagane!"
        } else if(!Number.isInteger(parseInt(values.recipe_level))) {
            isError = true;
            errors.recipe_level = "Zawartość musi być liczbowa!"
        }

        if(values.recipe_time < 1) {
            isError = true;
            errors.recipe_time = "Pole jest wymagane!"
        } else if(!Number.isInteger(parseInt(values.recipe_time))) {
            isError = true;
            errors.recipe_time = "Wpisz tylko liczby!"
        }

        this.setState({errors});
        return isError;
    };

    onClick = () => {
        let checkError = this.validation();

        if(!checkError) {
            this.props.nextStep();
        } else {
            return false;
        }
    };

    render() {
        const { handleChange, values } = this.props;
        const { errors } = this.state;

        return (
            <div>
                <Paper className="upload-box">
                    <Typography color="secondary" variant="h6">
                        Informacje o przepisie
                    </Typography>

                    <div className="upload-recipe">
                        <TextField
                            onChange={handleChange('recipe_name')}
                            className="information-field"
                            label="Nazwa przepisu"
                            name="recipe_name"
                            value={values.recipe_name}
                            error={!!errors.recipe_name}
                            helperText={errors.recipe_name}
                        />

                        <TextField
                            onChange={handleChange('recipe_description')}
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
                                onChange={handleChange('recipe_level')}
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
                            onChange={handleChange('recipe_time')}
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
                </Paper>

                <div className="steps-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.onClick}
                    >Dalej</Button>
                </div>
            </div>
        );
    };
}

export default UploadStepsInformation;