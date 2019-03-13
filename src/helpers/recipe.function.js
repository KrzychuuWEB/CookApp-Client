export const defaultValues = (state, index, stepName) => {
    const stepsValue = {
        name: '',
        description: '',
        step: index,
    };

    const ingredientsValue = {
        name: '',
        value: '',
        unit: 1,
        ingredient: index,
    };

    let newValues = [
        ...state[stepName],
        stepName === "steps" ? stepsValue : ingredientsValue
    ];

    return {values: {...state, [stepName]: newValues}}
};

export const deleteValue = (state, index, stepName) => {
    let deleteValue = [...state[stepName]];

    deleteValue.splice(deleteValue.indexOf(index), 1);

    return {values: {...state, [stepName]: deleteValue}};
};

export const changeValueIngredientsOrSteps = (state ,index, input, stepName, event) => {
    let inputValue = event.target.value;
    let indexName = stepName === "steps" ? "step" : "ingredient";

    return {
        values: {
            ...state,
            [stepName]: state[stepName].map(item => {
                if (item[indexName] === index) {
                    return {...item, [input]: inputValue};
                }

                return item;
            })
        }
    };
};

export const changeValueInformationOrPhotos = (state, input, e) => {
    return input === "photo" ?
        {values: {...state, photos: e.target.files}}
        :
        {values: {...state, [input]: e.target.value}};
};