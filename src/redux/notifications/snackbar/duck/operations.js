import actions from "./actions";

export const createSnackNotification = (variant, message) => dispatch => {
    dispatch(actions.add({variant, message}));
};

export const removeSnackNotification = () => dispatch => {
    dispatch(actions.remove());
};