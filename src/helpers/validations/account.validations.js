import {isFormValid} from "./index";

export const validAccountFirstName = (errors, values) => {
    if(values.first_name.length < 1) {
        errors.first_name = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountLastName = (errors, values) => {
    if(values.last_name.length < 1) {
        errors.last_name = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountAge = (errors, values) => {
    if(values.age.length < 1) {
        errors.age = "Pole jest wymagane!";
    } else if(!Number.isInteger(parseInt(values.age))) {
        errors.age = "Pole wymaga liczb!"
    }

    return isFormValid(errors);
};

export const validAccountHobby = (errors, values) => {
    if(values.hobby.length < 1) {
        errors.hobby = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountCountry = (errors, values) => {
    if(values.country.length < 1) {
        errors.country = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountPlace = (errors, values) => {
    if(values.place.length < 1) {
        errors.place = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};

export const validAccountAboutMe = (errors, values) => {
    if(values.about_me.length < 1) {
        errors.about_me = "Pole jest wymagane!";
    }

    return isFormValid(errors);
};