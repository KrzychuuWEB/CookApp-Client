import React, { Component } from 'react';
import './profile.scss';
import UserInformation from "../../../components/User/Profile/Information";
import UserTabs from "../../../components/User/Profile/Tabs";

class UserProfile extends Component {
    render() {
        return(
            <div className="user-profile-container">
                <UserInformation />
                <UserTabs />
            </div>
        );
    };
}

export default UserProfile;