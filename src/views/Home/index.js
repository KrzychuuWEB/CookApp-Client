import React, { Component } from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Card from "@material-ui/core/es/Card/Card";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";
import { cutText } from "../../helpers/cutText";

class Home extends Component {
    render() {
        const fab = {
          position: 'fixed',
          bottom: 35,
          right: 35,
        };

        return (
            <div className="home-container">
                <Fab component={Link} to="/upload" color="secondary" aria-label="Upload recipe" style={fab}>
                    <AddIcon />
                </Fab>

                <div className="flex-card">
                    {[0, 1, 2, 3, 4].map(value => (
                        <Card className="card" key={value}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        className="avatar"
                                        src="https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png"
                                        // src="https://images89.fotosik.pl/103/ee0c33fe1b62f569med.png"
                                        alt="User avatar - ECook"
                                    />
                                }
                                title="Shrimp and Chorizo Paella and Chorizo Paella and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                className="media"
                                image="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                title="Paella dish"
                            />

                            <CardContent>
                                <Typography component="p">
                                    {
                                        cutText("This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.", 100)
                                    }
                                </Typography>
                            </CardContent>

                            <CardActions disableActionSpacing>
                                <Button component={Link} to="recipe/1" color="primary" variant="text">Zobacz</Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;
