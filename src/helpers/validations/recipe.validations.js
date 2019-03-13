import {isFormValid} from "./index";

export const validRecipeName = (errors, values) => {
    if(values.recipe_name.length < 1) {
        errors.recipe_name = "Pole jest wymagane!"
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipeDescription = (errors, values) => {
    if(values.recipe_description.length < 1) {
        errors.recipe_description = "Pole jest wymagane!"
    } else if(values.recipe_description.length > 250) {
        errors.recipe_description = "Pole nie może zawierać więcej niż 250 znaków!!"
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipeLevel = (errors, values) => {
    if(values.recipe_level < 1) {
        errors.recipe_level = "Pole jest wymagane!"
    } else if(!Number.isInteger(parseInt(values.recipe_level))) {
        errors.recipe_level = "Zawartość musi być liczbowa!"
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipeTime = (errors, values) => {
    if(values.recipe_time < 1) {
        errors.recipe_time = "Pole jest wymagane!"
    } else if(!Number.isInteger(parseInt(values.recipe_time))) {
        errors.recipe_time = "Wpisz tylko liczby!"
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipePhotosExtension = (errors, values) => {
    for(let i = 0; i < values.length; i++) {
        let fileName = values[i].name;
        let fileExtension = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);

        if (fileExtension !== 'jpeg' && fileExtension !== 'png' && fileExtension !== 'jpg') {
            errors.extension = "Obługujemy tylko pliki z rozszerzeniem .jpg, .png, .jpeg!";
        }
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipePhotosLength = (errors, values) => {
    if(!values.length > 0) {
        errors.empty = "Musisz wybrać przynajmniej jedno zdjęcie, jeżeli nie masz zdjęcia przepisu zaznacz pole \"Nie mam zdjęcia przepisu\"";
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipeIngredientsName = (errors, values) => {
    if(values.name.length < 1) {
        errors['ingredients_name' + values.ingredient] = "Pole jest wymagane!";
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipeIngredientsValue = (errors, values) => {
    if(values.value.length < 1) {
        errors['ingredients_value' + values.ingredient] = "Pole jest wymagane!";
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipeIngredientsUnit = (errors, values) => {
    if(values.unit.length < 1) {
        errors['ingredients_unit' + values.ingredient] = "Pole jest wymagane!";
    } else if(!Number.isInteger(parseInt(values.unit))) {
        errors['ingredients_unit' + values.ingredient] = "Zawartość musi być liczbowa!";
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipeStepsName = (errors, values) => {
    if(values.name.length < 1) {
        errors['step_name' + values.step] = "Pole jest wymagane!";
    }

    return isFormValid(errors) ? null : errors;
};

export const validRecipeStepsDescription = (errors, values) => {
    if(values.description.length < 1) {
        errors['step_description' + values.step] = "Pole jest wymagane!";
    }

    return isFormValid(errors) ? null : errors;
};