export const ingredientDTO = (ingredient) => {
    return {
        name: ingredient.name,
        unit: ingredient.unit,
        value: ingredient.value,
    };
};