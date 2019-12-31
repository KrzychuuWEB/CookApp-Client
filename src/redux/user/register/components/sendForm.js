import {createUser} from "../../../../helpers/api/user.api";
import {SubmissionError} from "redux-form";

const sendRegisterForm = (formData) => {
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

export default sendRegisterForm;