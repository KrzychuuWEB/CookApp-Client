import React from "react";
import {FormHelperText} from "@material-ui/core";

function ErrorHelperText({ touched, error }) {
    return (
        <div>
            {
                touched && error && (
                    <FormHelperText error>
                        { error }
                    </FormHelperText>
                )
            }
        </div>
    );
}

export default ErrorHelperText;