import {isFormValid} from "./index";

const checkEmail = email => {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};


export const validUserUsername = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validUserEmail = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    } else if(!checkEmail(values[field])) {
        errors[field] = "Email jest nieprawidłowy!";
    }

    return isFormValid(errors);
};

export const validUserPassword = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!"
    } else if(values[field].length < 8) {
        errors[field] = "Hasło musi mieć minimum 8 znaków!"
    }

    return isFormValid(errors);
};

export const validUserPasswordAndRepeatPassword = (errors, values, field, fieldTwo) => {
    if (values[field] !== values[fieldTwo]) {
        errors[field] = "Hasła nie są takie same!";
        errors[fieldTwo] = "Hasła nie są takie same!";
    }

    return isFormValid(errors);
};