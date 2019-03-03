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
import * as loginApi from '../../../helpers/api/loginApi';
import {
    setUser,
    setUserToken
} from "../../../helpers/storage/user.storage";

class Login extends Component {
    state = {
        values: {
            username: '',
            password: '',
        },
        showPassword: false,
        errors: {},
        processing: false,
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    validation = () => {
        let { username, password } = this.state.values;
        let errors = {};
        let isValid = true;

        if(username.length < 1) {
            isValid = false;
            errors.username = "Pole jest wymagane!"
        }

        if(password.length < 1) {
            isValid = false;
            errors.password = "Pole jest wymagane!"
        } else if(password.length < 8) {
            isValid = false;
            errors.password = "Hasło musi mieć minimum 8 znaków!"
        }

        this.setState({errors: errors});
        return isValid;
    };

    onChange = input => e => {
        this.setState({values: {...this.state.values, [input]: e.target.value}})
    };

    onClick = async () => {
        let valid = this.validation();

        if(valid) {
            this.setState({processing: true});

            const data = this.state.values;

            await loginApi.login(data)
                .then(response => {
                    const token = response.data.token;
                    const { from } = this.props.location.state || { from: { pathname: "/" } };

                    setUserToken(token);
                    setUser(token);

                    setTimeout(() => {
                        this.props.history.push(from.pathname);
                    }, 200);
                })
                .catch(() => {
                    this.setState({
                        errors: {
                            username: "Nieprawidłowy login lub hasło!",
                            password: "Nieprawidłowy login lub hasło!",
                        }
                    })
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
                            <FormControl className="field-width" error={!!errors.password}>
                                <InputLabel htmlFor="adorment-password">Hasło</InputLabel>
                                <Input
                                    onChange={this.onChange("password")}
                                    value={values.password}
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
                                <FormHelperText>{errors.password}</FormHelperText>
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
            </div>
        );
    }
}

export default withRouter(Login);
