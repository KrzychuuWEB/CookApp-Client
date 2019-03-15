import React, { Component } from 'react';
import './userinformation.scss';
import {Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {isFormValid} from "../../../../helpers/validations";
import {
    validAccountAboutMe,
    validAccountAge, validAccountCountry,
    validAccountFirstName, validAccountHobby,
    validAccountLastName, validAccountPlace
} from "../../../../helpers/validations/account.validations";

class SettingsUserInformation extends Component {
    state = {
        values: {
            first_name: '',
            last_name: '',
            age: 20,
            hobby: '',
            country: '',
            place: '',
            about_me: '',
        },
        errors: {},
    };

    validation = () => {
        let values = this.state.values;
        let errors = {};

        validAccountFirstName(errors, values);
        validAccountLastName(errors, values);
        validAccountAge(errors, values);
        validAccountHobby(errors, values);
        validAccountCountry(errors, values);
        validAccountPlace(errors, values);
        validAccountAboutMe(errors, values);

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    onChange = (input) => e => {
        this.setState({values: {...this.state.values, [input]: e.target.value}})
    };

    onSubmit = () => {
        let checkValid = this.validation();

        if(checkValid) {
            return true;
        } else {
            return false;
        }
    };

    render() {
        const {errors, values} = this.state;

        return (
            <div className="edit-user-information">
                <TextField
                    className="user-information-fields"
                    label="Nazwa użytkownika"
                    disabled
                    value="KrzychuuWEB"
                />

                <TextField
                    className="user-information-fields"
                    label="Imię"
                    onChange={this.onChange("first_name")}
                    values={values.first_name}
                    error={!!errors.first_name}
                    helperText={errors.first_name}
                />

                <TextField
                    className="user-information-fields"
                    label="Nazwisko"
                    onChange={this.onChange("last_name")}
                    values={values.last_name}
                    error={!!errors.last_name}
                    helperText={errors.last_name}
                />

                <FormControl className="user-information-fields" error={!!errors.age}>
                    <InputLabel htmlFor="age-input">Wiek</InputLabel>
                    <Select
                        // onChange={this.onChange("age")}
                        values={19}
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
                    onChange={this.onChange("hobby")}
                    values={values.hobby}
                    error={!!errors.hobby}
                    helperText={errors.hobby}
                />

                <TextField
                    className="user-information-fields"
                    label="Kraj"
                    onChange={this.onChange("country")}
                    values={values.country}
                    error={!!errors.country}
                    helperText={errors.country}
                />

                <TextField
                    className="user-information-fields"
                    label="Miejscowość"
                    onChange={this.onChange("place")}
                    values={values.place}
                    error={!!errors.place}
                    helperText={errors.place}
                />

                <TextField
                    className="user-information-fields"
                    label="O mnie"
                    multiline
                    rows="4"
                    onChange={this.onChange("about_me")}
                    values={values.about_me}
                    error={!!errors.about_me}
                    helperText={errors.about_me}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onSubmit}
                >Zapisz zmiany</Button>
            </div>
        );
    }
}


export default SettingsUserInformation;