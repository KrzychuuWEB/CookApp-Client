import React from "react";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import {getUserStorage} from "../../../helpers/storage/user.storage";
import LoggedUserMenu from "./loggedUserMenu";

function DesktopMenu() {
    return (
        <div>
            {
                getUserStorage()
                    ? <div>
                        <LoggedUserMenu />
                    </div>
                    : <div>
                        <Button
                            component={Link}
                            to="/account"
                            color="primary"
                            variant="text"
                        >
                            Zaloguj się
                        </Button>
                    </div>
            }
        </div>
    );
}

export default DesktopMenu;