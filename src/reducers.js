import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import snackNotificationsReducer from "./services/notifications/snackbar/duck";

const rootReducer = combineReducers({
    snackNotification: snackNotificationsReducer,
    form: FormReducer,
});

export default rootReducer;