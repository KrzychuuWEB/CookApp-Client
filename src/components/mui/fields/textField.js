import React from "react";
import { TextField as TextFieldMUI } from "@material-ui/core";
import ErrorHelperText from "../errorHelperText";

function TextField({
    label,
    name,
    input,
    disabledWidth,
    classesContainer,
    meta: {touched, error},
    ...custom
}) {
    return (
        <div className={classesContainer}>
            <TextFieldMUI
                fullWidth={!disabledWidth}
                error={touched && !!error}
                label={label}
                name={name}
                {...input}
                {...custom}
            />

            <ErrorHelperText
                touched={touched}
                error={error}
            />
        </div>
    );
}

export default TextField;