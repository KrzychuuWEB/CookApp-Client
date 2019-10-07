import {loginUser} from "../../../../helpers/api/user.api";

const sendLoginForm = async ( formData ) => {
    await loginUser(formData)
        .then(response => {
            const token = response.data.token;

            console.log(token);
        })
};

export default sendLoginForm;