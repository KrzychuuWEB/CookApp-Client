import React, {useEffect} from "react";
import { useHistory } from "react-router-dom"
import {logoutProcess} from "../../../services/logout";

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