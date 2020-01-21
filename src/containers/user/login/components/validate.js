import {validEmail, validPassword} from "../../../../utils/validator/user/user.validation";

export const validate = (formData) => {
    const errors = {};

    validEmail(formData.email, errors);
    validPassword(formData.password, errors);

    return errors;
};