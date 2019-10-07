import React from "react";
import {
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ErrorHelperText from "../errorHelperText";

function PasswordField({
    label,
    name,
    input,
    disabledWidth,
    classesContainer,
    meta: {touched, error},
    ...custom
}) {
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <div className={classesContainer}>
            <FormControl fullWidth={!disabledWidth}>
                <InputLabel htmlFor="adornment-password">{label}</InputLabel>
                <Input
                    error={touched && !!error}
                    name={name}
                    {...input}
                    {...custom}
                    id="adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

            <ErrorHelperText
                touched={touched}
                error={error}
            />
        </div>
    );
}

export default PasswordField;