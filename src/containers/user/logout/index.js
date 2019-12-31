import React, {useEffect} from "react";
import { useHistory } from "react-router-dom"
import {logoutProcess} from "../../../helpers/function/logout";

function LogoutContainer() {
    let history = useHistory();

    useEffect(() => {
        logoutProcess();

       history.push("/");
    });

    return (
        <div>

        </div>
    );
}

export default LogoutContainer;