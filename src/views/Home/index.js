import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './home.scss';
import Card from "@material-ui/core/es/Card/Card";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";
import { cutText } from "../../helpers/cutText";

const styles = {
    card: {
        maxWidth: 320,
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

class Home extends Component {
    render() {
        const { classes } = this.props;

        const fab = {
          position: 'fixed',
          bottom: 35,
          right: 35,
        };

        return (
            <div>
                <Fab component={Link} to="/upload" color="secondary" aria-label="Upload recipe" style={fab}>
                    <AddIcon />
                </Fab>

                <div className="flex-card">
                    {[0, 1, 2, 3, 4].map(value => (
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe">
                                        K
                                    </Avatar>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                className={classes.media}
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

export default withStyles(styles)(Home);
