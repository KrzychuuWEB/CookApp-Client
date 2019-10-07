import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import {IconButton, InputBase, Tooltip} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.05),
        transition: theme.transitions.create('background-color'),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.10),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            marginLeft: theme.spacing(3),
            width: '400px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: '600px',
        },
    },
    searchIcon: {
        width: theme.spacing(5),
        height: '100%',
        position: 'absolute',
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing(1.2),
        paddingBottom: theme.spacing(1.2),
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(1),
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

function SearchInput() {
    const classes = useStyles();

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <Tooltip title="Szukaj">
                    <IconButton>
                        <Search />
                    </IconButton>
                </Tooltip>
            </div>

            <InputBase
                placeholder="Szukaj..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>

    );
}

export default SearchInput;