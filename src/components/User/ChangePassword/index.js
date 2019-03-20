import React, { Component } from 'react';
import './changepassword.scss';
import TextField from "@material-ui/core/es/TextField/TextField";
import {Button} from "@material-ui/core";

class UserChangePassword extends Component {
    render() {
        return (
            <div className="user-change-password">
                <TextField
                    className="change-password-fields"
                    label="Stare hasło"
                    name="old_password"
                />

                <TextField
                    className="change-password-fields"
                    label="Nowe hasło"
                    name="password"
                />

                <TextField
                    className="change-password-fields"
                    label="Powtórz nowe hasło"
                    name="repeat_password"
                />

                <Button className="change-password-button" variant="contained" color="primary">
                    Zmień hasło
                </Button>
            </div>
        );
    }
}

export default UserChangePassword;