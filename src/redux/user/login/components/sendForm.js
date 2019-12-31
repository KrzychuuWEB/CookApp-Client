import {loginUser} from "../../../../helpers/api/user.api";
import {
    addUserToStorage,
    setUserToken
} from "../../../../helpers/storage/user.storage";
import {SubmissionError} from "redux-form";

const sendLoginForm = (formData) => {
    return new Promise((res, rej) => {
        loginUser(formData)
            .then(response => {
                addUserToStorage(response.data.token);
                setUserToken("token", response.data.token);
                setUserToken("refreshToken", response.data.refresh_token);

                res();
            })
            .catch(error => {
                if(error.response && error.response.data) {
                    if (error.response.data.message === "Bad credentials") {
                        rej(new SubmissionError({
                            email: "Email lub hasło jest nieprawidłowe!",
                            password: "Email lub hasło jest nieprawidłowe!",
                        }))
                    }
                }

                rej(new SubmissionError(error));
            })
    })
};


export default sendLoginForm;