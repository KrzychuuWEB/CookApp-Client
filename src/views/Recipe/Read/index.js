import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
import Lightbox from "../../../components/Lightbox";

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

        return(
            <div className="read-recipe">
                <Paper className="paper-margin-read-recipe">
                    <CardHeader
                        avatar={
                            <Link className="user-link" to="/user/1">
                                <Avatar style={{backgroundColor: deepOrange[500]}}>
                                    K
                                </Avatar>
                            </Link>
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
                        title={
                            <Link className="user-link" to="/user/1">
                                <Typography>
                                    KrzychuuWEB
                                </Typography>
                            </Link>
                        }
                        subheader="September 14, 2016"
                    />
                </Paper>

                <Paper className="section-box">
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

                <Paper className="section-box">
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

                <Paper className="section-box">
                    <Typography variant="h6" color="secondary">
                        Przygotowanie krok po kroku
                    </Typography>

                    <div className="section-margin">
                        {[1, 2, 3,].map(value => (
                            <ExpansionPanel className="expansion-panel">
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

                <Paper className="section-box">
                    <Typography variant="h6" color="secondary">
                        Zdjęcia
                    </Typography>

                    <div className="section-margin margin-section-heading gallery-flex-read-recipe">
                        {[
                            "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            "http://www.kamilczaja.com/wp-content/uploads/2013/03/008-fotografia_reklamowa_jedzenia_i_potrawy_krewetki_z_grzankami-zdjecia-do-restauracji.jpg",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDyuoBbBUKA5kED0di-93KpoC1odh8-qwjvDMFZcTaZSn9WXb",

                        ].map(value => (
                            <div className="photo-read-recipe">
                                <Lightbox
                                    className="img-style"
                                    alt="test"
                                    src={value}
                                />
                            </div>
                        ))}
                    </div>
                </Paper>

            </div>
        );
    };
}

export default ReadRecipe;