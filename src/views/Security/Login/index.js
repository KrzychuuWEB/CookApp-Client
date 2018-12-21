import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: 420,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '25vh',
        marginBottom: '50px',
    },

    container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    textField: {
        width: '100%',
        marginTop: 15,
    },

    buttonDiv: {
        width: '95%',
        marginTop: 40,
        display: 'flex',
        justifyContent: 'space-between',
    },
});


class Login extends Component {
    state = {
        showPassword: false,
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h6" color="secondary">
                        Zaloguj się!
                    </Typography>

                    <form noValidate autoComplete="off">
                        <div className={classes.container}>
                            <TextField
                                className={classes.textField}
                                id="login"
                                label="Login"
                                name="user_login"
                            />
                            <FormControl className={classes.textField}>
                                <InputLabel htmlFor="adorment-password">Hasło</InputLabel>
                                <Input
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
                            </FormControl>
                        </div>
                        <div className={classes.buttonDiv}>
                            <Button style={{marginLeft: 20}} component={Link} to="/register" variant="text" color="secondary">Rejestracja</Button>

                            <Button variant="contained" color="primary">Zaloguj</Button>
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
