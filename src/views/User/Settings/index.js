import React, { Component } from 'react';
import './accountsettings.scss';
import {Paper, Tab, Tabs} from "@material-ui/core";
import UserChangePassword from "../../../components/User/ChangePassword";
import SettingsUserInformation from "../../../components/User/Settings/Information";

class AccountSettings extends Component {
    state = {
      value: 0,
    };

    changeTab = (event, value) => {
      this.setState({value});
    };

    render() {
        const { value } = this.state;

        return (
            <div className="account-settings">
                <Tabs
                    className="tabs-control"
                    value={value}
                    onChange={this.changeTab}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Profil" />
                    <Tab label="Zmiana hasła" />
                </Tabs>

                <Paper className="paper">
                    {value === 0 && <SettingsUserInformation/>}
                    {value === 1 && <UserChangePassword/>}
                </Paper>
            </div>
        );
    }
}

export default AccountSettings;