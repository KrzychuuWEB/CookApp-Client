import React, { Component } from 'react';
import './usertabs.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileTab from "./Profile";
import RecipesTab from "./Recipes";
import UserSettingsTab from "./Settings";
import {getUserRole} from "../../../../helpers/userRole";

class UserTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { user } = this.props;
        const style = {
            marginBottom: '20px',
        };

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
                        {
                            getUserRole("ROLE_ADMIN") && <Tab label="Ustawienia" />
                        }
                    </Tabs>
                </div>

                <div className="tabs-margin">
                    { value === 0 && <ProfileTab user={user} /> }
                    { value === 1 && <RecipesTab /> }
                    {
                        getUserRole("ROLE_ADMIN") && (value === 2 && <UserSettingsTab user={user} />)
                    }
                </div>

                <div style={style} />
            </div>
        );
    }
}

export default UserTabs;