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
    render() {
        const { recipe } = this.props;

        return (
            <div className="read-recipe-tab">
                <div className="flex">
                    <div className="ingredients">
                        <Typography variant="h6" component="h6" color="secondary">
                            Składniki
                        </Typography>

                        <FormGroup column>
                            {
                                recipe.ingredients.map(ingredient => (
                                    <FormControlLabel key={ingredient.name} control={
                                        <Checkbox
                                            values={ingredient.name}
                                        />
                                    } label={
                                        `${ingredient.value} ${ingredient.unit} ${ingredient.name}`
                                    } />
                                ))
                            }
                        </FormGroup>
                    </div>

                    <div className="steps">
                        <Typography variant="h6" component="h6" color="secondary">
                            Przygotowanie
                        </Typography>

                        {
                            recipe.steps.map(step => (
                                <ExpansionPanel key={step.step}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                                        <Typography>
                                            { step.step }. {step.name}
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            { step.description }
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <Typography variant="h6" color="secondary">
                        Zdjęcia
                    </Typography>

                    <div className="flex-gallery">
                        {
                            recipe.photos
                                ? <div>
                                    {
                                        recipe.photos.map(photo => (
                                            <div key={photo.id} className="recipe-gallery">
                                                <Lightbox
                                                    className="img-style"
                                                    alt={photo.name}
                                                    src={`http://localhost/projekty/ecook/api/public/images/${photo.name}`}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                                : <div>
                                    <Typography>
                                        Brak zdjęć przepisu!
                                    </Typography>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    };
}

export default RecipeTab