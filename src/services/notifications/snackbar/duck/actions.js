import types from "./types";

const add = payload => ({
    type: types.ADD_SNACK_NOTIFICATION, payload
});

const remove = () => ({
    type: types.REMOVE_SNACK_NOTIFICATION
});

export default {
    add,
    remove,
}