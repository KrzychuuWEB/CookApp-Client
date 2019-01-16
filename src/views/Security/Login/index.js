import React, { Component } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
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

class Login extends Component {
    state = {
        showPassword: false,
        login: '',
        password: '',
        errors: {},
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    validation = () => {
        let { login, password } = this.state;
        let errors = {};
        let isError = false;

        if(login.length < 1) {
            isError = true;
            errors.login = "Pole jest wymagane!"
        }

        if(password.length < 1) {
            isError = true;
            errors.password = "Pole jest wymagane!"
        } else if(password.length < 8) {
            isError = true;
            errors.password = "Hasło musi mieć minimum 8 znaków!"
        }

        this.setState({errors: errors});
        return isError;
    };

    onChange = input => e => {
        this.setState({
            [input]: e.target.value,
        })
    };

    onClick = () => {
        let checkError = this.validation();

        if(!checkError) {
            return true;
        } else {
            return false;
        }
    };

    render() {
        const { login, password, errors } = this.state;

        return (
            <div className="login-container">
                <Paper className="login-box" elevation={1}>
                    <Typography variant="h6" color="secondary">
                        Zaloguj się!
                    </Typography>

                    <form noValidate autoComplete="off">
                        <div className="login-form">
                            <TextField
                                onChange={this.onChange("login")}
                                value={login}
                                className="field-width"
                                id="login"
                                label="Login"
                                name="user_login"
                                error={!!errors.login}
                                helperText={errors.login}
                            />
                            <FormControl className="field-width" error={!!errors.password}>
                                <InputLabel htmlFor="adorment-password">Hasło</InputLabel>
                                <Input
                                    onChange={this.onChange("password")}
                                    value={password}
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

export default Login;
