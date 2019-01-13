import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './information.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Button from "@material-ui/core/es/Button/Button";
import Icon from "@material-ui/core/es/Icon/Icon";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    avatar: {
        height: 80,
        width: 80,
    },
});

class UserInformation extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                    <div className="flex-user-info-section">
                        <div className="left-user-section">
                            <div className="flex-left-section">
                                <div>
                                    <Avatar className={classes.avatar} src="https://images89.fotosik.pl/103/ee0c33fe1b62f569med.png" alt="Krzychuu avatar" />
                                    <span className="active-user online" />
                                </div>

                                <div>
                                    <Typography variant="h6" color="primary">
                                        KrzychuuWEB
                                        <Icon className="fa fa-mars icon-size" />
                                    </Typography>

                                    <Typography variant="subtitle1">
                                        Programista
                                    </Typography>

                                    <Typography variant="body2">
                                        Ostatnio aktywny/a: 13-01-2019
                                    </Typography>
                                </div>
                            </div>

                            <div>
                                <Button color="primary" variant="contained">Wiadomość</Button>
                            </div>
                        </div>

                        <div className="right-user-section">
                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Imie: </span>
                                Krzysztof
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Nazwisko: </span>
                                Nowakowski
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Wiek: </span>
                                19 lat
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Miejscowość: </span>
                                Białystok
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Dołączył/a: </span>
                                13-01-2019
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

UserInformation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInformation);