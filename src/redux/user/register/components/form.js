import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
import TextField from "../../../../components/mui/fields/textField";
import {Button, IconButton, InputAdornment} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import { validate } from "./validate";
import sendRegisterForm from "./sendForm";
import InformationDialog from "../../../../components/mui/informationDialog";
import { useHistory } from "react-router-dom";
import {createSnackNotification} from "../../../notifications/snackbar/duck/operations";
import { useDispatch } from "react-redux";
import {routePath} from "../../../../helpers/pages.routes";

const useStyles = makeStyles(theme => ({
    field: {
        marginBottom: 25,
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    fieldFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        '& > div': {
            width: '48%'
        },
    },
}));

const UserRegisterForm = ({ handleSubmit, submitting, changeAccountPage }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = React.useState({showPassword: false});

    const handleClickShowPassword = () => {
        setShowPassword({ ...showPassword, showPassword: !showPassword.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const sendDataToApi = async (formData) => {
        await sendRegisterForm(formData)
            .catch(() => {
                history.push(routePath.login);
                dispatch(createSnackNotification("success", "Konto zostało utworzone"));
            })
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit(sendDataToApi)}>
            <div className={classes.fieldFlex}>
                <Field
                    component={TextField}
                    name="username"
                    label="Imie"
                    classesContainer={classes.field}
                />
                <Field
                    component={TextField}
                    name="lastName"
                    label="Nazwisko"
                    classesContainer={classes.field}
                />
            </div>

            <Field
                component={TextField}
                name="email"
                label="Email"
                classesContainer={classes.field}
            />

            <div className={classes.fieldFlex}>
                <Field
                    component={TextField}
                    name="password"
                    label="Hasło"
                    classesContainer={classes.field}
                    type={showPassword.showPassword ? 'text' : 'password'}
                />

                <Field
                    component={TextField}
                    name="repeatPassword"
                    label="Powtórz hasło"
                    classesContainer={classes.field}
                    type={showPassword.showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <div className={classes.button}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Utwórz konto
                </Button>
            </div>

            <InformationDialog
                open={submitting}
                title="Trwa proces tworzenia nowego konta"
                text="Proces tworzenia konta może chwile potrwać"
            />
        </form>
    );
};

export default reduxForm({
    form: "user-register-form",
    validate,
})(UserRegisterForm);