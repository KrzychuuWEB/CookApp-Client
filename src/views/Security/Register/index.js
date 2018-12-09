import React, { Component } from 'react';
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
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: 420,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '25vh',
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    widthBox: {
        width: '90%',
        marginTop: 15,
    },

    buttonDiv: {
        marginTop: 25,
        marginLeft: 'auto',
    },

    button: {
        marginRight: theme.spacing.unit * 2,
    },
});


class Register extends Component {
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
                        Zarejestruj się!
                    </Typography>

                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            className={classes.widthBox}
                            label="Login"
                        />
                        <TextField
                            className={classes.widthBox}
                            label="Email"
                        />
                        <TextField
                            className={classes.widthBox}
                            label="Email"
                        />
                        <FormControl className={classes.widthBox}>
                            <InputLabel htmlFor="adorment-password">Hasło</InputLabel>
                            <Input
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
                        <FormControl className={classes.widthBox}>
                            <InputLabel htmlFor="repeat-password">Powtórz hasło</InputLabel>
                            <Input
                                id="repeat-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                            />
                        </FormControl>
                        <FormControlLabel className={classes.widthBox} control={
                            <Checkbox
                                value="accept_terms"
                                color="primary"
                            />
                        } label="Akceptuje regulamin"/>

                        <div className={classes.buttonDiv}>
                            <Button className={classes.button} variant="contained" color="primary">Zarejestruj</Button>
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
