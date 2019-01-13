import React, { Component } from 'react';
import UserInformation from "../../../components/User/Profile/Information";
import UserTabs from "../../../components/User/Profile/Tabs";

class UserProfile extends Component {
    render() {
        return(
            <div className="user-profile">
                <UserInformation />
                <UserTabs />
            </div>
        );
    };
}

export default UserProfile;