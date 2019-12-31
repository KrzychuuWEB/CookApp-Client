import {validEmail, validPassword} from "../../../../helpers/validator/user.validation";

export const validate = (formData) => {
    const errors = {};

    validEmail(formData.email, errors);
    validPassword(formData.password, errors);

    return errors;
};