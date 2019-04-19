import React, { Component } from 'react';
import './userinformation.scss';
import {
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Paper,
    Snackbar
} from "@material-ui/core";
import {isFormValid} from "../../../../helpers/validations";
import {
    validAccountAboutMe,
    validAccountAge, validAccountCountry,
    validAccountFirstName, validAccountHobby,
    validAccountLastName, validAccountCity
} from "../../../../helpers/validations/account.validations";
import {getUserByUsername} from "../../../../helpers/api/user.api";
import {getUser} from "../../../../helpers/storage/user.storage";
import {accountDTO} from "../../../../helpers/api/DTO/account.DTO";
import {updateAccount} from "../../../../helpers/api/account.api";
import CircularLoader from "../../../Loaders/Circular";
import MySnackbarContent from "../../../Snackbars";
import ChangeContentIfError from "../../../../helpers/api/interceptor/changeContentIfError";

class SettingsUserInformation extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            age: 0,
            hobby: '',
            country: '',
            city: '',
            aboutMe: '',
        },
        errors: {},
        processing: true,
        snackbar: {
            open: false,
            message: '',
            variant: '',
        },
    };

    componentDidMount() {
        getUserByUsername(getUser().username)
            .then(response => {
                let data = JSON.parse(response.data.user);
                let account = accountDTO(data);

                this.setState({values: {...this.state.values, ...account}});
            })
            .finally(() => {
                this.setState({processing: false});
            });
    }

    validation = () => {
        let values = this.state.values;
        let errors = {};

        validAccountFirstName(errors, values, "firstName");
        validAccountLastName(errors, values, "lastName");
        validAccountAge(errors, values, "age");
        validAccountHobby(errors, values, "hobby");
        validAccountCountry(errors, values, "country");
        validAccountCity(errors, values, "city");
        validAccountAboutMe(errors, values, "aboutMe");

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    onChange = (input) => e => {
        this.setState({values: {...this.state.values, [input]: e.target.value}})
    };

    onSubmit = () => {
        let checkValid = this.validation();

        if(checkValid) {
            updateAccount(getUser().username, this.state.values)
                .then(response => {
                    this.setState({snackbar: {
                            open: true,
                            message: response.data.success,
                            variant: 'success',
                        }
                    });
                })
                .catch(error => {
                    this.setState({snackbar: {
                            open: true,
                            message: error.response.data.error,
                            variant: 'error',
                        }
                    });
                })
            ;
        } else {
            return false;
        }
    };

    closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({snackbar: {
                open: false,
                message: '',
                variant: '',
            }
        });
    };

    render() {
        const {errors, values, processing, snackbar} = this.state;

        return (
            <div>
                <ChangeContentIfError>
                    {
                        processing
                            ? <CircularLoader />
                            : <Paper className="paper edit-user-information">
                                <TextField
                                    className="user-information-fields"
                                    label="Imię"
                                    onChange={this.onChange("firstName")}
                                    value={values.firstName}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                />

                                <TextField
                                    className="user-information-fields"
                                    label="Nazwisko"
                                    onChange={this.onChange("lastName")}
                                    value={values.lastName}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                />

                                <FormControl className="user-information-fields" error={!!errors.age}>
                                    <InputLabel htmlFor="age-input">Wiek</InputLabel>
                                    <Select
                                        onChange={this.onChange("age")}
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
                                    onChange={this.onChange("hobby")}
                                    value={values.hobby}
                                    error={!!errors.hobby}
                                    helperText={errors.hobby}
                                />

                                <TextField
                                    className="user-information-fields"
                                    label="Kraj"
                                    onChange={this.onChange("country")}
                                    value={values.country}
                                    error={!!errors.country}
                                    helperText={errors.country}
                                />

                                <TextField
                                    className="user-information-fields"
                                    label="Miejscowość"
                                    onChange={this.onChange("city")}
                                    value={values.city}
                                    error={!!errors.city}
                                    helperText={errors.city}
                                />

                                <TextField
                                    className="user-information-fields"
                                    label="O mnie"
                                    multiline
                                    rows="4"
                                    onChange={this.onChange("aboutMe")}
                                    value={values.aboutMe}
                                    error={!!errors.aboutMe}
                                    helperText={errors.aboutMe}
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.onSubmit}
                                >Zapisz zmiany</Button>
                            </Paper>
                    }

                    {
                        snackbar.open &&
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={snackbar.open}
                        >
                            <MySnackbarContent
                                onClose={this.closeSnackbar}
                                variant={snackbar.variant}
                                message={snackbar.message}
                            />
                        </Snackbar>
                    }
                </ChangeContentIfError>
            </div>
        );
    }
}


export default SettingsUserInformation;