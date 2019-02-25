import React, { Component } from 'react';
import './readrecipe.scss';
import {Paper} from "@material-ui/core";
import ReadInformation from "../../../components/Recipe/Read/Information";
import ReadTabs from "../../../components/Recipe/Read/Tabs";

class ReadRecipe extends Component {
    render() {
        return(
            <div className="read-recipe">
                <Paper className="paper">
                    <ReadInformation />
                </Paper>

                <ReadTabs />
            </div>
        );
    };
}

export default ReadRecipe;