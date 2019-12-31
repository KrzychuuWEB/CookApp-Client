import {
    validEmail, validFirstName,
    validLastName,
    validPassword,
    validSamePassword
} from "../../../../helpers/validator/user.validation";

export const validate = (formData) => {
    let errors = {};

    validEmail(formData.email, errors);
    validPassword(formData.password, errors);
    validPassword(formData.repeatPassword, errors, "repeatPassword");
    validSamePassword(formData.password, formData.repeatPassword, errors);
    validFirstName(formData.firstName, errors);
    validLastName(formData.lastName, errors);

    return errors;
};