import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";
import {routePath} from "../../../global/pages.routes";

const useStyles = makeStyles(theme => ({
    iconSize: {
        fontSize: 24,
    },
    iconPadding: {
        padding: 5,
    },
    menu: {
        '& a': {
            paddingRight: 30,
        }
    }
}));

function LoggedUserMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                className={classes.iconPadding}
                aria-controls="logged-user-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <AccountCircle className={classes.iconSize} />
            </IconButton>

            <Menu
                id="logged-user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                <MenuItem component={Link} to={routePath.logout}><IconButton><ExitToApp /></IconButton>Wyloguj</MenuItem>
            </Menu>
        </div>
    );
}

export default LoggedUserMenu;