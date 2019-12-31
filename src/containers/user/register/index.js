import React from "react";
import AccountBoxWithLogo from "../../../components/containers/accountBoxWithLogo";
import UserRegisterForm from "../../../redux/user/register/components/form";
import ApiErrorsControl from "../../../helpers/api/interceptors/apiErrorsControl";

const RegisterContainer = () => {
    return (
        <ApiErrorsControl>
            <AccountBoxWithLogo
                title="Tworzenie nowego konta"
                redirectLocation="/account"
            >
                <UserRegisterForm />
            </AccountBoxWithLogo>
        </ApiErrorsControl>
    );
};

export default RegisterContainer;