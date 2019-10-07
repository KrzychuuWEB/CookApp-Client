import React from "react";
import BoxWithLogoAndFixedMargin from "../../../components/containers/boxWithLogoAndFixedMargin";
import UserLoginForm from "../../../redux/user/login/components/form";

function LoginContainer() {
    return (
        <div>
            <BoxWithLogoAndFixedMargin
                title="Zaloguj się"
            >
                <UserLoginForm />
            </BoxWithLogoAndFixedMargin>
        </div>
    );
}

export default LoginContainer;