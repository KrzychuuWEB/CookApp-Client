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
import {getJWT} from "../../../helpers/JWT";

class Register extends Component {
    state = {
        values: {
            username: '',
            email: '',
            password: '',
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

        if(values.password.length < 1) {
            isError = true;
            errors.password = "Pole jest wymagane!"
        } else if(values.password.length < 8) {
            isError = true;
            errors.password = "Hasło musi mieć minimum 8 znaków!"
        }

        if(values.repeatPassword.length < 1) {
            isError = true;
            errors.repeatPassword = "Pole jest wymagane!";
        } else if(values.repeatPassword.length < 8) {
            isError = true;
            errors.repeatPassword = "Hasło musi mieć minimum 8 znaków!"
        }

        if (values.repeatPassword !== values.password) {
            isError = true;
            errors.password = "Hasła nie są takie same!";
            errors.repeatPassword = "Hasła nie są takie same!";
        }

        if(!values.terms) {
            isError = true;
            errors.terms = "Regulamin jest wymagany!"
        }

        this.setState({errors: errors});
        return isError;
    };

    onClick = () => {
        let checkError = this.validation();

        if(!checkError) {
            // fetch('http://localhost:8000/register', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //         // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDgzMzk4NTEsImV4cCI6MTU0ODM0MzQ1MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiQWRtaW5pc3RyYXRvciJ9.P1EMiJNfpg_RcXCk-AgkRrfyVhbXxpdLwDMLhs3kaYDuAPS6TacZfHk8e2X-F9L2Tg5Mfa-NvpVIjKfx6isLwRB1EqB7yB6L4ctcAZpfSz-E4sRDO0XdEflDx2KjKupXoGdyhOcXKwTAp4SezUEaTe7I_x--_QvveSelhgDMywjKsAI2S-hbt-Ur4gFj_XxcmpmZo0DEM7xI_iCY1_X9YC989HeF5fsk8IrHGg-XdLQRgzMF3xSoJhGSUeF2rU8FoZrJebFdcTAQj0bWlFxfrQ3EDBHbx63MbCJ4b-cvId-vlwVeHKQIs8QIwnATsOraIyZtsaBOPH_UMiHgyo2QhbxNVSejctIHOuGrOkcYS5fHtSpZo8HX5lxpe_4l6yxkIyM5ZsUSGpVzAF5SfSQAehc1i5DkwdlvXuce_bRjXgjVHMtb392FsKMkBAVnk0x8Wg-gYqqHnuZpTcWKaAOH48wlVe77lpguWzcmaOAYMOm81voRU8cNCHki7ceQvj1shKljLPqIhoFMYPfpMmZaZL1QQP2K6T0OuXb0U2nTXyd-7Dme19VsyGaYcTZJOHj7Qdluhv5YasaPMnkEBdQ1NVC60ZiABqzgxmIsWrrIbshhctVplozgD6BmVhmNzW1TxipQKb66fqZ-Onx7kS2rnKkwmgQYNJV_pOQWYzinQJc'
            //     },
            //     body: JSON.stringify({
            //         username: this.state.values.username,
            //         password: this.state.values.password,
            //     }),
            // })
            //     .then(response => response.json())
            //     .then(response => {
            //         console.log(response);
            //     });

            fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.values.username,
                })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                })
        } else {
            console.log(getJWT());
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

                        <FormControl className="field-width" error={!!errors.password}>
                            <InputLabel htmlFor="adorment-password">Hasło</InputLabel>
                            <Input
                                value={values.password}
                                onChange={this.onChange("password")}
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
                            <FormHelperText className="remove-margin">{ errors.password }</FormHelperText>
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

