import React, { Component } from 'react';
import {getUser} from "../../../../helpers/storage/user.storage";
import {ListItemIcon, ListItemText, Menu, MenuItem, IconButton} from "@material-ui/core";
import {AccountBox, ExitToApp, Settings} from "@material-ui/icons";
import {Link} from "react-router-dom";
import UserAvatar from "../../../Avatar";

class LoggedUserMenu extends Component {
    state = {
        anchorEl: null,
    };

    openUserMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    closeUserMenu = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <IconButton
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.openUserMenu}
                >
                    <UserAvatar
                        username={getUser().username}
                        url="https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png"
                    />
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.closeUserMenu}
                >
                    <MenuItem
                        onClick={this.closeUserMenu}
                        component={Link}
                        to={`/user/${getUser().username}`}
                    >
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>

                        <ListItemText>Profil</ListItemText>
                    </MenuItem>
                    <MenuItem
                        onClick={this.closeUserMenu}
                        component={Link}
                        to="/settings"
                    >
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>

                        <ListItemText>Ustawienia</ListItemText>
                    </MenuItem>
                    <MenuItem
                        onClick={this.closeUserMenu}
                        component={Link}
                        to="/logout"
                    >
                        <ListItemIcon>
                            <ExitToApp />
                        </ListItemIcon>

                        <ListItemText>Wyloguj</ListItemText>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default LoggedUserMenu;