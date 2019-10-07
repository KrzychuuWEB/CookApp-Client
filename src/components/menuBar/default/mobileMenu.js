import React from 'react';
import { Link } from "react-router-dom";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import { ExitToApp, MoreVert } from "@material-ui/icons";

function MobileMenu() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    return (
        <div>
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
            >
                <MenuItem style={{paddingRight: "30px"}} component={Link} to="/login">
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                    <p>Zaloguj się</p>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default MobileMenu;