import React, { Component } from 'react';
import './userinformation.scss';
import {Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

class SettingsFields extends Component {
    render() {
        const { errors, values, onChange, onClick } = this.props;

        return (
            <div className="user-settings-edit-fields">
                <TextField
                    className="user-information-fields"
                    label="Imię"
                    onChange={onChange("firstName")}
                    value={values.firstName}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                />

                <TextField
                    className="user-information-fields"
                    label="Nazwisko"
                    onChange={onChange("lastName")}
                    value={values.lastName}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                />

                <FormControl className="user-information-fields" error={!!errors.age}>
                    <InputLabel htmlFor="age-input">Wiek</InputLabel>
                    <Select
                        onChange={onChange("age")}
                        value={values.age}
                        inputProps={{
                            name: 'age',
                            id: 'age-input'
                        }}
                    >
                        {
                            [...Array(100)].map((x, i) =>
                                <MenuItem key={i} value={i}>{i}</MenuItem>
                            )
                        }
                    </Select>
                    {

                        errors.age
                            ? <FormHelperText>{errors.age}</FormHelperText>
                            : null
                    }
                </FormControl>

                <TextField
                    className="user-information-fields"
                    label="Zainteresowania"
                    onChange={onChange("hobby")}
                    value={values.hobby}
                    error={!!errors.hobby}
                    helperText={errors.hobby}
                />

                <TextField
                    className="user-information-fields"
                    label="Kraj"
                    onChange={onChange("country")}
                    value={values.country}
                    error={!!errors.country}
                    helperText={errors.country}
                />

                <TextField
                    className="user-information-fields"
                    label="Miejscowość"
                    onChange={onChange("city")}
                    value={values.city}
                    error={!!errors.city}
                    helperText={errors.city}
                />

                <TextField
                    className="user-information-fields"
                    label="O mnie"
                    multiline
                    rows="4"
                    onChange={onChange("aboutMe")}
                    value={values.aboutMe}
                    error={!!errors.aboutMe}
                    helperText={errors.aboutMe}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClick}
                >Zapisz zmiany</Button>
            </div>
        );
    }
}

export default SettingsFields;
