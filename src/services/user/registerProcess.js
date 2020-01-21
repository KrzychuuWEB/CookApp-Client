import {createUser} from "./actions.api";
import {SubmissionError} from "redux-form";

const registerProcess = (formData) => {
    return new Promise((resolve, reject) => {
        createUser(formData)
            .then(() => {
                resolve();
            })
            .catch(error => {
                if(error.response.data.error) {
                    reject(new SubmissionError(error.response.data.error));
                }

                reject();
            })
    });
};

export default registerProcess;