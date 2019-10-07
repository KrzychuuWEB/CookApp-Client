import React from "react";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";

function DesktopMenu() {
    return (
        <div>
            <Button
                component={Link}
                to="/login"
                color="primary"
                variant="text"
            >
                Zaloguj się
            </Button>
        </div>
    );
}

export default DesktopMenu;