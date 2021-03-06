import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, Info } from '@material-ui/icons';

class LeftBar extends React.Component {
    render() {
        return (
            <div className={this.props.width}>
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Strona główna" />
                    </ListItem>

                    <ListItem button component={Link} to="/license">
                        <ListItemIcon><Info /></ListItemIcon>
                        <ListItemText primary="Licencje" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default LeftBar;