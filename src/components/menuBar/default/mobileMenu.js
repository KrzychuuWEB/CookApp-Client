import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import { MoreVert, PowerSettingsNew } from "@material-ui/icons";
import {getUserStorage} from "../../../helpers/storage/user.storage";
import LoggedUserMenu from "./loggedUserMenu";
import {routePath} from "../../../helpers/pages.routes";

const useStyles = makeStyles(theme => ({
    menu: {
        '& a': {
            paddingRight: 30,
        }
    }
}));

function MobileMenu() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const mobileMenuId = 'primary-search-accountActionList-menu-mobile';

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    return (
        <div>
            {
                getUserStorage()
                    ? <LoggedUserMenu />
                    : <div>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="primary"
                        >
                            <MoreVert />
                        </IconButton>

                        <Menu
                            anchorEl={mobileMoreAnchorEl}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            id={mobileMenuId}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={isMobileMenuOpen}
                            onClose={handleMobileMenuClose}
                            className={classes.menu}
                        >
                            <div>
                                <MenuItem component={Link} to={routePath.account}>
                                    <IconButton>
                                        <PowerSettingsNew />
                                    </IconButton>
                                    <p>Zaloguj się</p>
                                </MenuItem>
                            </div>
                        </Menu>
                    </div>
            }
        </div>
    );
}

export default MobileMenu;