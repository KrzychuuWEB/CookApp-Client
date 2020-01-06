import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Tooltip, Drawer} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchInput from "./search";
import {APP_NAME} from "../../../helpers/constants";
import MobileMenu from "./mobileMenu";
import DesktopMenu from "./desktopMenu";
import MenuLeft from "./menuLeft";
import {routePath} from "../../../helpers/pages.routes";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    appBar: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: theme.palette.primary.main,
        textDecoration: 'none',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function MenuBar() {
    const classes = useStyles();

    const [state, setState] = React.useState({left: false});

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    return (
        <header className={classes.root}>
            <div className={classes.grow}>
                <AppBar className={classes.appBar} position="fixed" elevation={0} color="inherit">
                    <Toolbar variant="dense">
                        <IconButton
                            onClick={toggleDrawer("left", true)}
                            edge="start"
                            className={classes.menuButton}
                            color="primary"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Tooltip title="Przejdz do strony głównej">
                            <Typography component={Link} to={routePath.home} color="primary" className={classes.title} variant="h6" noWrap>
                                { APP_NAME }
                            </Typography>
                        </Tooltip>

                            <div className={classes.grow} />

                        <SearchInput />

                            <div className={classes.grow} />

                        <div className={classes.sectionDesktop}>
                            <DesktopMenu />
                        </div>

                        <div className={classes.sectionMobile}>
                            <MobileMenu />
                        </div>
                    </Toolbar>
                </AppBar>

                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    <MenuLeft toggleDrawer={toggleDrawer} />
                </Drawer>
            </div>
        </header>
    );
}

export default MenuBar;