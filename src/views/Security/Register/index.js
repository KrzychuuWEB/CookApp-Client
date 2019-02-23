import React, { Component } from 'react';
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
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
import * as registerApi from '../../../helpers/api/registerApi';

class Register extends Component {
    state = {
        values: {
            username: '',
            email: '',
            plainPassword: '',
            repeatPassword: '',
            terms: false,
        },
        showPassword: false,
        errors: {},
    };

    checkEmail = email => {
        let regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onChange = input => e => {
        this.setState({
            values: { ...this.state.values, [input]: e.target.value }
        });
    };

    handleCheckbox = e => {
      this.setState({
          values: { ...this.state.values, terms: e.target.checked}
      })
    };

    validation = () => {
        let values = this.state.values;
        let errors = {};
        let isError = false;

        if(values.username.length < 1) {
            isError = true;
            errors.username = "Pole jest wymagane!";
        }

        if(values.email.length < 1) {
            isError = true;
            errors.email = "Pole jest wymagane!";
        } else if(!this.checkEmail(values.email)) {
            isError = true;
            errors.email = "Email jest nieprawidłowy!";
        }

        if(values.plainPassword.length < 1) {
            isError = true;
            errors.plainPassword = "Pole jest wymagane!"
        } else if(values.plainPassword.length < 8) {
            isError = true;
            errors.plainPassword = "Hasło musi mieć minimum 8 znaków!"
        }

        if(values.repeatPassword.length < 1) {
            isError = true;
            errors.repeatPassword = "Pole jest wymagane!";
        } else if(values.repeatPassword.length < 8) {
            isError = true;
            errors.repeatPassword = "Hasło musi mieć minimum 8 znaków!"
        }

        if (values.repeatPassword !== values.plainPassword) {
            isError = true;
            errors.plainPassword = "Hasła nie są takie same!";
            errors.repeatPassword = "Hasła nie są takie same!";
        }

        if(!values.terms) {
            isError = true;
            errors.terms = "Regulamin jest wymagany!"
        }

        this.setState({errors: errors});
        return isError;
    };

    onClick = async () => {
        // let checkError = this.validation();
        let checkError = false;

        if(!checkError) {
            const { username, plainPassword, email } = this.state.values;
            let data = {username, plainPassword, email};

            await registerApi.create(data);
        } else {
            return false;
        }
    };

    render() {
        const { errors, values } = this.state;

        return (
            <div className="register-container">
                <Paper className="register-box" elevation={1}>
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

                        <div className="terms-container">
                            <FormControlLabel className="field-width" control={
                                <Checkbox
                                    onChange={this.handleCheckbox}
                                    checked={values.terms}
                                    value="accept_terms"
                                    color="primary"
                                />
                            } label="Akceptuje regulamin" />

                            {
                                errors.terms ?
                                    <Typography variant="caption" color="error">
                                        { errors.terms }
                                    </Typography>
                                    : null
                            }
                        </div>

                        <div className="buttons">
                            <Button
                                onClick={this.onClick}
                                className="button"
                                variant="contained"
                                color="primary"
                            >Zarejestruj</Button>
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default Register;

