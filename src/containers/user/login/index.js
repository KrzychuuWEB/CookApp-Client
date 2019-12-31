import React from "react";
import AccountBoxWithLogo from "../../../components/containers/accountBoxWithLogo";
import UserLoginForm from "../../../redux/user/login/components/form";
import ApiErrorsControl from "../../../helpers/api/interceptors/apiErrorsControl";

const LoginContainer = () => {
    return (
        <ApiErrorsControl>
            <AccountBoxWithLogo
                title="Zaloguj się"
                redirectLocation="/account"
            >
                <UserLoginForm />
            </AccountBoxWithLogo>
        </ApiErrorsControl>
    );
};

export default LoginContainer;