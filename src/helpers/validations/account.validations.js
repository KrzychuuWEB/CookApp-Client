import {isFormValid} from "./index";

export const validAccountFirstName = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountLastName = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountAge = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    } else if(!Number.isInteger(parseInt(values[field]))) {
        errors[field] = "Pole wymaga liczb!"
    }

    return isFormValid(errors);
};

export const validAccountHobby = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountCountry = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountCity = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountAboutMe = (errors, values, field) => {
    if(values[field].length < 1) {
        errors[field] = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};