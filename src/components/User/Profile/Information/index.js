import React, { Component } from 'react';
import './information.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Button from "@material-ui/core/es/Button/Button";
import Icon from "@material-ui/core/es/Icon/Icon";

class UserInformation extends Component {
    render() {
        const { user } = this.props;

        return (
            <div className="user-information-container">
                <Paper className="user-information-box">
                    <div className="flex-user-info-section">
                        <div className="left-user-section">
                            <div className="flex-avatar-section">
                                <div>
                                    <Avatar
                                        className="avatar"
                                        src="https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png"
                                        // src="https://images89.fotosik.pl/103/ee0c33fe1b62f569med.png"
                                        alt={user.username + " avatar - ECook"}
                                    />
                                    <span className="active-user online" />
                                </div>

                                <div>
                                    <Typography variant="h6" color="primary">
                                        {user.username}
                                        <Icon className="fa fa-mars icon-size" />
                                    </Typography>

                                    <Typography variant="subtitle1">
                                        { user.hobby }
                                    </Typography>

                                    <Typography variant="body2">
                                        Ostatnio aktywny/a: -
                                    </Typography>
                                </div>
                            </div>

                            <div>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    disabled
                                >
                                    Wiadomość
                                </Button>
                            </div>
                        </div>

                        <div className="right-user-section">
                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Imie: </span>
                                { user.first_name }
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Nazwisko: </span>
                                { user.last_name }
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Wiek: </span>
                                { user.age }
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Miejscowość: </span>
                                { user.city }
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <span>Dołączył/a: </span>
                                { user.created_at.substring(0, 10) }
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default UserInformation;