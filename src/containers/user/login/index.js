import React from "react";
import AccountBoxWithLogo from "../../../components/accountBoxWithLogo";
import UserLoginForm from "./components/form";
import ApiErrorsControl from "../../../services/api/interceptors/apiErrorsControl";

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