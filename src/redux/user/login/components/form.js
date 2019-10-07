import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { reduxForm, Field,  } from "redux-form";
import TextField from "../../../../components/mui/fields/textField";
import {Button, CircularProgress} from "@material-ui/core";
import sendLoginForm from "./sendForm";
import PasswordField from "../../../../components/mui/fields/passwordField";

const useStyles = makeStyles(theme => ({
    field: {
        marginBottom: 15
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
    },
    loading: {
        marginRight: 30,
    },
}));

const validate = (formData) => {
    const errors = {};

    if (!formData.username || formData.username.length < 0) {
        errors.username = "Login nie może być puste!";
    }

    // if (!formData.password || formData.password.length < 8) {
    //     errors.password = "Hasło nie może być puste!";
    // }

    return errors;
};


function UserLoginForm({ handleSubmit, submitting }) {
    const classes = useStyles();

    return (
        <form autoComplete="off" onSubmit={handleSubmit(sendLoginForm)}>
            <Field
                name="username"
                component={TextField}
                label="Login"
                classesContainer={classes.field}
            />

            <Field
                name="password"
                component={PasswordField}
                label="Hasło"
                classesContainer={classes.field}
            />

           <div className={classes.buttons}>
               <Button
                   color="secondary"
                   variant="text"
               >
                   Zapomniałem hasła
               </Button>

               {
                   submitting
                       ? <CircularProgress size={24} className={classes.loading} />
                       : <Button
                           color="primary"
                           variant="contained"
                           type="submit"
                       >
                           Zaloguj
                       </Button>
               }
           </div>
        </form>
    );
}

export default reduxForm({
    form: "user-login-form",
    validate,
})(UserLoginForm);