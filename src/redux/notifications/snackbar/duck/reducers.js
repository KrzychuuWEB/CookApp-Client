import types from "./types";

const INITIAL_STATE = {
    variant: "success",
    message: "",
    open: false,
};

const snackNotificationsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_SNACK_NOTIFICATION:
            return { ...state, open: true, message: action.payload.message, variant: action.payload.variant };
        case types.REMOVE_SNACK_NOTIFICATION:
            return {...state, open: false};
        default:
            return state;
    }
};

export default snackNotificationsReducer;