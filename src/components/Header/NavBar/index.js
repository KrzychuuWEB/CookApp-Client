import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Drawer } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { Search, Menu } from '@material-ui/icons';
import LeftMenuList from "../LeftMenuList";
import {getUser} from "../../../helpers/storage/user.storage";
import LoggedUserMenu from "./LoggedUserMenu";

const styles = theme => ({
    list: {
        width: 250,
    },

    root: {
        width: '100%',
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
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
});

class NavBar extends Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <Menu />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            ECook
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search />
                            </div>
                            <InputBase
                                placeholder="Znajdz przepis..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.grow} />
                        {
                            !getUser()
                                ? <Button color="inherit" component={Link} to="/login">Zaloguj</Button>
                                : <LoggedUserMenu/>
                        }
                    </Toolbar>
                </AppBar>

                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        <LeftMenuList width={classes.list} />
                    </div>
                </Drawer>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);