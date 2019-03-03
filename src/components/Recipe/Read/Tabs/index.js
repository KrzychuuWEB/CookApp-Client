import React, { Component } from 'react';
import './readtabs.scss';
import {Tabs, Tab, Paper} from '@material-ui/core';
import RecipeTab from "./Recipe";

class ReadTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <div className="read-recipe-control-tabs">
                <div className="tabs-control">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Przepis" />
                        <Tab label="Komentarze (123)" />
                    </Tabs>
                </div>

                <Paper className="paper">
                    { value === 0 && <RecipeTab/> }
                    { value === 1 && "123" }
                </Paper>
            </div>
        );
    }
}

export default ReadTabs;