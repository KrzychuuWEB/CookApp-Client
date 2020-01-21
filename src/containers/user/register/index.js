import React from "react";
import AccountBoxWithLogo from "../../../components/accountBoxWithLogo";
import UserRegisterForm from "./components/form";
import ApiErrorsControl from "../../../services/api/interceptors/apiErrorsControl";

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