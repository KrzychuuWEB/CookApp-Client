import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
}));

function MenuLeft({toggleDrawer}) {
    const classes = useStyles();

    return (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary="Strona główna" />
                </ListItem>
            </List>
        </div>
    );
}

export default MenuLeft;