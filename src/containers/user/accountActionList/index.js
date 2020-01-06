import React from "react";
import { Link } from "react-router-dom";
import AccountBoxWithLogo from "../../../components/containers/accountBoxWithLogo";
import {List, ListItem, ListItemText} from "@material-ui/core";
import { AccountCircle, VpnKey, PersonAdd } from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {routePath} from "../../../helpers/pages.routes";

const AccountActionListContainer = () => {
    return (
        <AccountBoxWithLogo
            title="Wybierz opcje"
            redirectLocation="/"
        >
            <List component="nav">
                <ListItem button divider component={Link} to={routePath.login}>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Zaloguj się" />
                </ListItem>

                <ListItem button divider component={Link} to={routePath.register}>
                    <ListItemIcon>
                        <PersonAdd />
                    </ListItemIcon>
                    <ListItemText primary="Zarejestruj się" />
                </ListItem>

                <ListItem button divider component={Link} to={routePath.recoveryPassword}>
                    <ListItemIcon>
                        <VpnKey />
                    </ListItemIcon>
                    <ListItemText primary="Odzyskaj konto" />
                </ListItem>
            </List>
        </AccountBoxWithLogo>
    );
};

export default AccountActionListContainer;