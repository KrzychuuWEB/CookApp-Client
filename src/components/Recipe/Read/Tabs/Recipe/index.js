import React, { Component } from 'react';
import './recipetab.scss';
import {
    Checkbox,
    ExpansionPanel, ExpansionPanelDetails,
    ExpansionPanelSummary,
    FormControlLabel,
    FormGroup,
    Typography
} from "@material-ui/core";
import Lightbox from "../../../../Lightbox";
import { ExpandMore } from '@material-ui/icons';

class RecipeTab extends Component {
    state = {
      checkbox: [
          "1 puszka brzoskwiń",
          "1/2 łyżki mleka",
          "1 margaryna",
          "1 opakowanie proszku do pieczenia",
      ]
    };

    render() {
        return (
            <div className="read-recipe-tab">
                <div className="flex">
                    <div className="ingredients">
                        <Typography variant="h6" component="h6" color="secondary">
                            Składniki
                        </Typography>

                        <FormGroup column>
                            {
                                this.state.checkbox.map(item => (
                                    <FormControlLabel control={
                                        <Checkbox
                                            values={item}
                                        />
                                    } label={item} />
                                ))
                            }
                        </FormGroup>
                    </div>

                    <div className="steps">
                        <Typography variant="h6" component="h6" color="secondary">
                            Przygotowanie
                        </Typography>

                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                                <Typography>
                                    1. Przygotowanie ciasta
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                                <Typography>
                                    2. Przygotowanie masy
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </div>

                <div>
                    <Typography variant="h6" color="secondary">
                        Zdjęcia
                    </Typography>

                    <div className="flex-gallery">
                        {[
                            "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                            "http://www.kamilczaja.com/wp-content/uploads/2013/03/008-fotografia_reklamowa_jedzenia_i_potrawy_krewetki_z_grzankami-zdjecia-do-restauracji.jpg",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDyuoBbBUKA5kED0di-93KpoC1odh8-qwjvDMFZcTaZSn9WXb",

                        ].map(value => (
                            <div className="recipe-gallery">
                                <Lightbox
                                    className="img-style"
                                    alt="test"
                                    src={value}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };
}

export default RecipeTab