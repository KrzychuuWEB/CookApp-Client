import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './profiletab.scss';
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/es/Icon/Icon";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";

class ProfileTab extends Component {
    render() {
        return (
            <div className="profile-tab">
                <Paper className="profil-right-section">
                    <Typography variant="h6" color="secondary" className="section-title">
                        O mnie
                    </Typography>

                    <Typography variant="body2">
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
                    </Typography>

                    <span className="line" />

                    <div>
                        <Tooltip title="Facebook">
                            <Link to="/">
                                <IconButton>
                                    <Icon color="primary" className="fab fa-facebook" />
                                </IconButton>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Youtube">
                            <Link to="/">
                                <IconButton>
                                    <Icon color="primary" className="fab fa-youtube" />
                                </IconButton>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Strona internetowa">
                            <Link to="/">
                                <IconButton>
                                    <Icon color="primary" className="fas fa-globe" />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </div>
                </Paper>
            </div>
        );
    };
}

export default ProfileTab;