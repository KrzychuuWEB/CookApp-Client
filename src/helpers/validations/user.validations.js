import {isFormValid} from "./index";

export const validUserUsername = (errors, values) => {
    if(values.username.length < 1) {
        errors.username = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validUserEmail = (errors, values) => {
    if(values.email.length < 1) {
        errors.email = "Pole jest wymagane!";
    } else if(!this.checkEmail(values.email)) {
        errors.email = "Email jest nieprawidłowy!";
    }
    return isFormValid(errors);
};

export const validUserPassword = (errors, values) => {
    if(values.plainPassword.length < 1) {
        errors.plainPassword = "Pole jest wymagane!"
    } else if(values.plainPassword.length < 8) {
        errors.plainPassword = "Hasło musi mieć minimum 8 znaków!"
    }

    return isFormValid(errors);
};

export const validUserRepeatPassword = (errors, values) => {
    if(values.repeatPassword.length < 1) {
        errors.repeatPassword = "Pole jest wymagane!"
    } else if(values.repeatPassword.length < 8) {
        errors.repeatPassword = "Hasło musi mieć minimum 8 znaków!"
    }

    return isFormValid(errors);
};

export const validUserPasswordAndRepeatPassword = (errors, values) => {
    if (values.repeatPassword !== values.plainPassword) {
        errors.plainPassword = "Hasła nie są takie same!";
        errors.repeatPassword = "Hasła nie są takie same!";
    }

    return isFormValid(errors);
};