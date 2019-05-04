import React, { Component } from 'react';
import './login.scss';
import { withRouter, Link } from 'react-router-dom';
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
import {LinearProgress} from "@material-ui/core";
import * as userApi from '../../../helpers/api/user.api';
import {
    setUser,
    setUserToken
} from "../../../helpers/storage/user.storage";
import {isFormValid} from "../../../helpers/validations";
import {validUserPassword, validUserUsername} from "../../../helpers/validations/user.validations";
import ChangeContentIfError from "../../../helpers/api/interceptor/changeContentIfError";

class Login extends Component {
    state = {
        values: {
            username: '',
            plainPassword: '',
        },
        showPassword: false,
        errors: {},
        processing: false,
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    validation = () => {
        let values = this.state.values;
        let errors = {};

        validUserUsername(errors, values, "username");
        validUserPassword(errors, values, "plainPassword");

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    onChange = input => e => {
        this.setState({values: {...this.state.values, [input]: e.target.value}})
    };

    onClick = async () => {
        let valid = this.validation();

        if(valid) {
            this.setState({processing: true});

            const data = {
                'username': this.state.values.username,
                'password': this.state.values.plainPassword,
            };

            await userApi.loginUser(data)
                .then(response => {
                    const token = response.data.token;
                    const { from } = this.props.location.state || { from: { pathname: "/" } };

                    setUserToken(token);
                    setUser(token);

                    setTimeout(() => {
                        this.props.history.push(from.pathname);
                    }, 200);
                })
                .catch(error => {
                    if(error.response && error.response.data) {
                        this.setState({
                            errors: {
                                username: "Nieprawidłowy login lub hasło!",
                                plainPassword: "Nieprawidłowy login lub hasło!",
                            }
                        });
                    }
                })
                .finally(() => {
                    this.setState({processing: false});
                })
        } else {
            return false;
        }
    };

    render() {
        const { values, errors, processing } = this.state;

        return (
            <div className="login-container">
                <ChangeContentIfError>
                    <Paper className="login-box">
                        {
                            processing && <LinearProgress className="progress-bar" color="secondary" />
                        }

                        <Typography variant="h6" color="secondary">
                            Zaloguj się!
                        </Typography>

                        <form noValidate autoComplete="off">
                            <div className="login-form">
                                <TextField
                                    onChange={this.onChange("username")}
                                    value={values.username}
                                    className="field-width"
                                    id="username"
                                    label="Login"
                                    name="user_login"
                                    error={!!errors.username}
                                    helperText={errors.username}
                                />
                                <FormControl className="field-width" error={!!errors.plainPassword}>
                                    <InputLabel htmlFor="adorment-password">Hasło</InputLabel>
                                    <Input
                                        onChange={this.onChange("plainPassword")}
                                        value={values.plainPassword}
                                        name="user_password"
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
                                    <FormHelperText>{errors.plainPassword}</FormHelperText>
                                </FormControl>
                            </div>
                            <div className="buttons">
                                <Button style={{marginLeft: 20}} component={Link} to="/register" variant="text" color="secondary">Rejestracja</Button>

                                <Button
                                    onClick={this.onClick}
                                    variant="contained"
                                    color="primary"
                                >Zaloguj</Button>
                            </div>
                        </form>
                    </Paper>
                </ChangeContentIfError>
            </div>
        );
    }
}

export default withRouter(Login);
