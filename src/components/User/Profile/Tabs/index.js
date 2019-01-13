import React, { Component } from 'react';
import './usertabs.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileTab from "./Profile";
import RecipesTab from "./Recipes";

class UserTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <div>
                <div className="tabs-control">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Profil" />
                        <Tab label="Przepisy" />
                    </Tabs>
                </div>

                <div className="tabs-margin">
                    { value === 0 && <ProfileTab /> }
                    { value === 1 && <RecipesTab /> }
                </div>
            </div>
        );
    }
}

export default UserTabs;