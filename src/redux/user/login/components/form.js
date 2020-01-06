import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {reduxForm, Field, } from "redux-form";
import TextField from "../../../../components/mui/fields/textField";
import {
    Button,
    InputAdornment,
    IconButton,
} from "@material-ui/core";
import sendLoginForm from "./sendForm";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import InformationDialog from "../../../../components/mui/informationDialog";
import { useHistory } from "react-router-dom";
import { validate } from "./validate";
import {createSnackNotification} from "../../../notifications/snackbar/duck/operations";
import { useDispatch } from "react-redux";
import {routePath} from "../../../../helpers/pages.routes";

const useStyles = makeStyles(theme => ({
    field: {
        marginBottom: 25,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
    },
}));

const UserLoginForm = ({ handleSubmit, submitting, initialize }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [values, setValues] = React.useState({
        showPassword: false,
    });

    React.useEffect(() => {
        initialize({email: "admin@ecookhub.pl", password: "admin"});
    }, [initialize]);

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    let history = useHistory();
    const redirectIfLoginSuccess = async (formData) => {
        await sendLoginForm(formData)
            .then(() => {
                history.push(routePath.home);
                dispatch(createSnackNotification("success", "Zostałeś zalogowany!"));
            })
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit(redirectIfLoginSuccess)}>
            <Field
                name="email"
                component={TextField}
                label="Twój email"
                classesContainer={classes.field}
            />

            <Field
                name="password"
                component={TextField}
                label="Twoje hasło"
                classesContainer={classes.field}
                type={values.showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

           <div className={classes.buttons}>
               <Button
                   color="primary"
                   variant="contained"
                   type="submit"
               >
                   Zaloguj
               </Button>
           </div>

            <InformationDialog
                open={submitting}
                title="Trwa proces logowania"
                text="Za chwile zostaniesz zalogowany"
            />
        </form>
    );
};

export default reduxForm({
    form: "user-login-form",
    validate,
})(UserLoginForm);