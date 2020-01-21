export const validEmail = (email, errors, field = "email") => {
    const regex = /\S+@\S+\.\S+/;

    if (!email) {
        errors[field] = "Email nie może być pusty!";
    } else if (!regex.test(email)) {
        errors[field] = "Email jest nieprawidłowy!";
    }
};

export const validPassword = (password, errors, field = "password") => {
    if (!password) {
        errors[field] = "Hasło nie może być puste!";
    } else if (password < 8) {
        errors[field] = "Hasło musi mieć więcej niż 8 znaków";
    }
};

export const validSamePassword = (password, repeatPassword, errors, field1 = "password", field2 = "repeatPassword") => {
    if (password !== repeatPassword) {
        errors[field1] = "Hasła nie są takie same!";
        errors[field2] = "Hasła nie są takie same!";
    }
};

export const validFirstName = (firstName, errors, field = "firstName") => {
    if (!firstName) {
        errors[field] = "Imie nie może być puste!";
    }
};

export const validLastName = (lastName, errors, field = "lastName") => {
    if (!lastName) {
        errors[field] = "Nazwisko nie może być puste!";
    }
};