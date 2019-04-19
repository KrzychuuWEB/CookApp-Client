import React, { Component } from 'react';
import './changepassword.scss';
import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    Paper,
    Snackbar,
    InputAdornment,
    IconButton,
    InputLabel, CircularProgress
} from "@material-ui/core";
import ChangeContentIfError from "../../../../helpers/api/interceptor/changeContentIfError";
import MySnackbarContent from "../../../Snackbars";
import {isFormValid} from "../../../../helpers/validations";
import {
    validUserPassword,
    validUserPasswordAndRepeatPassword,
} from "../../../../helpers/validations/user.validations";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {changePassword} from "../../../../helpers/api/account.api";
import {getUser} from "../../../../helpers/storage/user.storage";
import {ChangePasswordDTO} from "../../../../helpers/api/DTO/changePassword.DTO";

class UserChangePassword extends Component {
    state = {
        values: {
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: '',
        },
        errors: {},
        snackbar: {
            open: false,
            message: '',
            variant: '',
        },
        showOldPassword: false,
        showNewPassword: false,
        processing: false,
    };

    validation = () => {
        let values = this.state.values;
        let errors = {};

        validUserPasswordAndRepeatPassword(errors, values, "repeatNewPassword", "newPassword");
        validUserPassword(errors, values, "oldPassword");
        validUserPassword(errors ,values, "newPassword");
        validUserPassword(errors ,values, "repeatNewPassword");

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    onChange = (input) => e => {
        this.setState({values: {...this.state.values, [input]: e.target.value}});
    };

    onClick = () => {
        let checkValid = this.validation();

        if(checkValid) {
            this.setState({processing: true});

            changePassword(getUser().username, {
                oldPassword: this.state.values.oldPassword,
                password: {
                    first: this.state.values.newPassword,
                    second: this.state.values.repeatNewPassword,
                }
            })
                .then(() => {
                    this.setState({snackbar: {
                            open: true,
                            message: 'Hasło zostało zmienione!',
                            variant: 'success',
                        }
                    });
                })
                .catch(error => {
                    let res = error.response.data;

                    if(res.fields) {
                        let errors = ChangePasswordDTO(res.fields);
                        this.setState({errors: errors});
                    } else {
                        this.setState({snackbar: {
                                open: true,
                                message: res.error,
                                variant: 'error',
                            }
                        });
                    }
                })
                .finally(() => {
                    this.setState({processing: false})
                })
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

    handleClickShowPassword = (field) => e => {
        this.setState(state => ({ [field]: !state[field] }));
    };

    render() {
        const { values, snackbar, errors, processing } = this.state;

        return (
            <ChangeContentIfError>
                <Paper className="paper">
                    <div className="user-change-password">
                        <FormControl className="change-password-fields" error={!!errors.oldPassword}>
                            <InputLabel>Stare hasło</InputLabel>
                            <Input
                                value={values.oldPassword}
                                onChange={this.onChange("oldPassword")}
                                type={this.state.showOldPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Pokaż/ukryj hasło"
                                            onClick={this.handleClickShowPassword("showOldPassword")}
                                        >
                                            { this.state.showOldPassword ? <Visibility /> : <VisibilityOff/> }
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {
                                errors.oldPassword && <FormHelperText>{errors.oldPassword}</FormHelperText>
                            }
                        </FormControl>

                        <FormControl className="change-password-fields" error={!!errors.newPassword}>
                            <InputLabel>Nowe hasło</InputLabel>
                            <Input
                                values={values.newPassword}
                                onChange={this.onChange("newPassword")}
                                type={this.state.showNewPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Pokaż/ukryj hasło"
                                            onClick={this.handleClickShowPassword("showNewPassword")}
                                        >
                                            { this.state.showNewPassword ? <Visibility /> : <VisibilityOff/> }
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {
                                errors.newPassword&& <FormHelperText>{errors.newPassword}</FormHelperText>
                            }
                        </FormControl>

                        <FormControl className="change-password-fields" error={!!errors.repeatNewPassword}>
                            <InputLabel>Powtórz nowe hasło</InputLabel>
                            <Input
                                value={values.repeatNewPassword}
                                onChange={this.onChange("repeatNewPassword")}
                                type={this.state.showNewPassword ? 'text' : 'password'}
                            />
                            {
                                errors.repeatNewPassword && <FormHelperText>{errors.repeatNewPassword}</FormHelperText>
                            }
                        </FormControl>

                        <div className="button-and-processing-position">
                            <Button
                                onClick={this.onClick}
                                className="change-password-button"
                                variant="contained"
                                color="primary"
                            >
                                Zmień hasło
                            </Button>
                            {
                                processing && <CircularProgress />
                            }
                        </div>
                    </div>
                </Paper>

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
        );
    }
}

export default UserChangePassword;