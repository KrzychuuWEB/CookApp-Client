import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './register.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
import * as userApi from '../../../helpers/api/user.api';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress} from "@material-ui/core";
import {isFormValid} from "../../../helpers/validations";
import {
    validUserEmail,
    validUserPassword,
    validUserPasswordAndRepeatPassword,
    validUserUsername
} from "../../../helpers/validations/user.validations";
import ChangeContentIfError from "../../../helpers/api/interceptor/changeContentIfError";

class Register extends Component {
    state = {
        values: {
            username: '',
            email: '',
            plainPassword: '',
            repeatPassword: '',
        },
        showPassword: false,
        errors: {},
        processing: false,
        termsOpen: false,
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onChange = input => e => {
        this.setState({
            values: { ...this.state.values, [input]: e.target.value }
        });
    };

    validation = () => {
        let values = this.state.values;
        let errors = {};

        validUserUsername(errors, values, "username");
        validUserEmail(errors, values, "email");
        validUserPassword(errors, values, "password");
        validUserPassword(errors, values, "repeatPassword");
        validUserPasswordAndRepeatPassword(errors, values, "password", "repeatPassword");

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    register = async () => {
        this.handleClose();

        const { username, plainPassword, email } = this.state.values;

        this.setState({processing: true});

        await userApi.createUser(
            {
                username,
                plainPassword,
                email
            }
        )
            .then(response => {
                setTimeout(() => {
                    this.props.history.push("/login");
                }, 500);
            })
            .catch(error => {
                if(error.response && error.response.data) {
                    const fields = error.response.data.error_fields;
                    this.setState({errors: fields})
                }
            })
            .finally(() => {
                this.setState({processing: false});
            });
    };

    handleClickOpen = () => {
        let valid = this.validation();

        if(valid) {
            this.setState({ termsOpen: true });
        } else {
            return false;
        }
    };

    handleClose = () => {
        this.setState({ termsOpen: false });
    };

    render() {
        const { errors, values, processing } = this.state;

        return (
            <div className="register-container">
                <ChangeContentIfError>
                    <Paper className="register-box">
                        {
                            processing && <LinearProgress className="progress-bar" color="secondary" />
                        }

                        <Typography variant="h6" color="secondary">
                            Zarejestruj się!
                        </Typography>


                        <form className="register-form" noValidate autoComplete="off">
                            <TextField
                                value={values.username}
                                className="field-width"
                                label="Login"
                                onChange={this.onChange("username")}
                                error={!!errors.username}
                                helperText={errors.username}
                            />
                            <TextField
                                value={values.email}
                                className="field-width"
                                label="Email"
                                onChange={this.onChange("email")}
                                error={!!errors.email}
                                helperText={errors.email}
                            />

                            <FormControl className="field-width" error={!!errors.plainPassword}>
                                <InputLabel htmlFor="adorment-password">Hasło</InputLabel>
                                <Input
                                    value={values.plainPassword}
                                    onChange={this.onChange("plainPassword")}
                                    id="adorment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Pokaż/ukryj hasło"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                { this.state.showPassword ? <Visibility /> : <VisibilityOff/> }
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <FormHelperText className="remove-margin">{ errors.plainPassword }</FormHelperText>
                            </FormControl>

                            <FormControl className="field-width" error={!!errors.repeatPassword}>
                                <InputLabel htmlFor="repeat-password">Powtórz hasło</InputLabel>
                                <Input
                                    value={values.repeatPassword}
                                    onChange={this.onChange("repeatPassword")}
                                    id="repeat-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                />
                                <FormHelperText className="remove-margin">{ errors.repeatPassword }</FormHelperText>
                            </FormControl>

                            <div className="buttons">
                                <Button
                                    onClick={this.handleClickOpen}
                                    className="button"
                                    variant="contained"
                                    color="primary"
                                >Zarejestruj</Button>
                            </div>
                        </form>


                        <Dialog
                            open={this.state.termsOpen}
                            onClose={this.handleClose}
                            scroll="paper"
                        >
                            <DialogTitle>Regulamin</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Regulamin serwisu ECook
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Anuluj
                                </Button>

                                <Button onClick={this.register} color="primary" variant="contained">
                                    Akceptuje
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Paper>
                </ChangeContentIfError>
            </div>
        );
    }
}

export default withRouter(Register);

