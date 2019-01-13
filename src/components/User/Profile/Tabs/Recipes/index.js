import React, { Component } from 'react';
import './recipestab.scss';
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";
import { cutText } from "../../../../../helpers/cutText";

class RecipesTab extends Component {
    render() {
        return (
            <div className="recipes-tab">
                <Card className="card-width">
                    <CardMedia
                        className="card-media"
                        image="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        title="Shrimp and Chorizo Paella"
                    />

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Shrimp and Chorizo Paella
                        </Typography>

                        <Typography component="p">
                            {
                                cutText("This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.", 100)
                            }
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button color="primary" variant="text">Zoabcz</Button>
                    </CardActions>
                </Card>

                <Card className="card-width">
                    <CardMedia
                        className="card-media"
                        image="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        title="Shrimp and Chorizo Paella"
                    />

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Shrimp and Chorizo Paella
                        </Typography>

                        <Typography component="p">
                            This ims along with the mussels, if you like.
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button color="primary" variant="text">Zoabcz</Button>
                    </CardActions>
                </Card>

                <Card className="card-width">
                    <CardMedia
                        className="card-media"
                        image="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        title="Shrimp and Chorizo Paella"
                    />

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Shrimp and Chorizo Paella
                        </Typography>

                        <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button color="primary" variant="text">Zoabcz</Button>
                    </CardActions>
                </Card>

                <Card className="card-width">
                    <CardMedia
                        className="card-media"
                        image="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        title="Shrimp and Chorizo Paella"
                    />

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Shrimp and Chorizo Paella
                        </Typography>

                        <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button color="primary" variant="text">Zoabcz</Button>
                    </CardActions>
                </Card>
            </div>
        );
    };
}

export default RecipesTab;