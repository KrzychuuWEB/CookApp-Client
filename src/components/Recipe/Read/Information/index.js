import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './information.scss';
import {Avatar, Button, Tooltip, Typography} from "@material-ui/core";
import { Assessment, Timer, CloudUpload } from '@material-ui/icons'

class ReadInformation extends Component {
    convertLevel = (level) => {
        switch(level) {
            case 1:
                return "Łatwy";
            case 2:
                return "Średni";
            case 3:
                return "Trudny";
            default:
                return "Brak informacji";
        }
    };

    render() {
        const { recipe } = this.props;

        return (
            <div className="read-information">
                <div className="recipe-information">
                    <Typography color="secondary" component="h2" variant="h6">
                        { recipe.name }
                    </Typography>

                    <Typography>
                        { recipe.description }
                    </Typography>

                    <div className="additional-information">
                        <div>
                           <Tooltip title="Poziom trudności">
                               <Assessment color="primary" style={{ fontSize: 30 }} />
                           </Tooltip>
                               <Typography variant="body1">
                                   { this.convertLevel(recipe.level) }
                               </Typography>
                        </div>

                        <div>
                            <Tooltip title="Czas przygotowania">
                                <Timer color="primary" style={{ fontSize: 30 }} />
                            </Tooltip>
                            <Typography variant="body1">
                                { recipe.time } minut
                            </Typography>
                        </div>

                        <div>
                            <Tooltip title="Przepis dodano">
                                <CloudUpload color="primary" style={{ fontSize: 30 }} />
                            </Tooltip>
                            <Typography variant="body1">
                                { recipe.created_at.substring(0, 10) }
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
                                { recipe.author }
                            </Typography>

                            <Typography>
                                -
                            </Typography>
                        </div>
                    </div>

                    <div className="author-button">
                        <Button component={Link} to={`/user/${recipe.author}`} color="primary" variant="outlined">Zobacz profil</Button>
                    </div>
                </div>
            </div>
        );
    };
}

export default ReadInformation;