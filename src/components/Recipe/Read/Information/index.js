import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './information.scss';
import {Avatar, Button, Tooltip, Typography} from "@material-ui/core";
import { Assessment, Timer, CloudUpload } from '@material-ui/icons'

class ReadInformation extends Component {
    render() {
        return (
            <div className="read-information">
                <div className="recipe-information">
                    <Typography color="secondary" component="h2" variant="h6">
                        Sernik z brzoskwiniami
                    </Typography>

                    <Typography>
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add...
                    </Typography>

                    <div className="additional-information">
                        <div>
                           <Tooltip title="Poziom trudności">
                               <Assessment color="primary" style={{ fontSize: 30 }} />
                           </Tooltip>
                               <Typography variant="body1">
                                   Łatwy
                               </Typography>
                        </div>

                        <div>
                            <Tooltip title="Czas przygotowania">
                                <Timer color="primary" style={{ fontSize: 30 }} />
                            </Tooltip>
                            <Typography variant="body1">
                                60 minut
                            </Typography>
                        </div>

                        <div>
                            <Tooltip title="Przepis dodano">
                                <CloudUpload color="primary" style={{ fontSize: 30 }} />
                            </Tooltip>
                            <Typography variant="body1">
                                2019-02-24 19:38
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="line" />

                <div className="author-information">
                    <div className="author">
                        <div>
                            <Avatar className="avatar">KK</Avatar>
                        </div>

                        <div>
                            <Typography variant="h6" color="primary">
                                Krzysztof Kowalski
                            </Typography>

                            <Typography>
                                Bloger kulinarny
                            </Typography>
                        </div>
                    </div>

                    <div className="author-button">
                        <Button component={Link} to="/user/1" color="primary" variant="outlined">Zobacz profil</Button>
                    </div>
                </div>
            </div>
        );
    };
}

export default ReadInformation;