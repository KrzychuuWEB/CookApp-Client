import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './readrecipe.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import { MoreVert, FlagOutlined, ExpandMore, AccessTime, Star } from '@material-ui/icons';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import deepOrange from "@material-ui/core/es/colors/deepOrange";
import Typography from "@material-ui/core/es/Typography/Typography";
import Menu from "@material-ui/core/es/Menu/Menu";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";
import FormGroup from "@material-ui/core/es/FormGroup/FormGroup";
import ExpansionPanel from "@material-ui/core/es/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/es/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/es/ExpansionPanelDetails/ExpansionPanelDetails";
import Icon from "@material-ui/core/es/Icon/Icon";

const styles = theme => ({
    expansion: {
        width: '100%',
        marginTop: 20,
    },

    paper: {
        padding: 20,
        marginBottom: 10,
    },
});

class ReadRecipe extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const { classes } = this.props;

        return(
            <div className="read-recipe">
                <Paper className="paper-margin-read-recipe">
                    <CardHeader
                        avatar={
                            <Avatar style={{backgroundColor: deepOrange[500]}}>
                                K
                            </Avatar>
                        }
                        action={
                            <div>
                                <IconButton
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                >
                                    <MoreVert />
                                </IconButton>

                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}><ListItemIcon><FlagOutlined /></ListItemIcon>Zgłoś</MenuItem>
                                </Menu>
                            </div>
                        }
                        title="KrzychuuWEB"
                        subheader="September 14, 2016"
                    />
                </Paper>

                <Paper className={classes.paper}>
                    <Typography variant="h6" color="secondary">
                        Shrimp and Chorizo Paella
                    </Typography>

                    <div className="section-margin margin-section-heading">
                        <Typography>
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>

                        <div className="flex-icon-info">
                            <div className="icon-center-text">
                                <Icon color="secondary">
                                    <AccessTime />
                                </Icon>
                                <Typography color="secondary">
                                    60 minut
                                </Typography>
                            </div>

                            <div className="icon-center-text">
                                <Icon color="secondary">
                                    <Star />
                                </Icon>
                                <Typography color="secondary">
                                    Łatwy
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Paper>

                <Paper className={classes.paper}>
                    <Typography variant="h6" color="secondary">
                        Składniki
                    </Typography>

                    <FormGroup className="section-margin">
                        {['Cebula', 'Pomidor', 'Makaron', 'Ketchup', 'Papryka'].map(value => (
                            <FormControlLabel key={value} control={
                                <Checkbox
                                    value="Checked"
                                />
                            } label={value} />
                        ))}
                    </FormGroup>
                </Paper>

                <Paper className={classes.paper}>
                    <Typography variant="h6" color="secondary">
                        Przygotowanie krok po kroku
                    </Typography>

                    <div className="section-margin">
                        {[1, 2, 3,].map(value => (
                            <ExpansionPanel className={classes.expansion}>
                                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                                    <Typography>
                                        {value}. Przygotowanie sosu
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </div>
                </Paper>

                <Paper className={classes.paper}>
                    <Typography variant="h6" color="secondary">
                        Zdjęcia
                    </Typography>

                    <div className="section-margin margin-section-heading gallery-flex-read-recipe">
                        {[1, 2, 3].map(value => (
                            <div className="photo-read-recipe">
                                <img alt="test" src="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </div>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    };
}

ReadRecipe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReadRecipe);