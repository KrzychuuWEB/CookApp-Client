import React, { Component } from 'react';
import './profile.scss';
import UserInformation from "../../../components/User/Profile/Information";
import UserTabs from "../../../components/User/Profile/Tabs";
import ChangeContentIfError from "../../../helpers/api/interceptor/changeContentIfError";
import * as userApi from '../../../helpers/api/user.api';
import CircularLoader from "../../../components/Loaders/Circular";
import SearchError from "../../Errors/Search";

class UserProfile extends Component {
    state = {
        user: {},
        processing: true,
        searchError: false,
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const username = nextProps.match.params.username;

        this.state.searchError && this.setState({searchError: false});

        this.loadUser(username);
    }

    componentDidMount() {
        const username = this.props.match.params.username;
        this.loadUser(username);
    }

    loadUser = (username) => {
        userApi.getUserByUsername(username)
            .then(response => {
                this.setState({user: JSON.parse(response.data.user)});
            })
            .catch(() => {
                this.setState({searchError: true});
            })
            .finally(() => {
                this.setState({processing: false});
            });
    };

    render() {
        const { user, processing, searchError } = this.state;

        return(
            <div className="user-profile-container">
                <ChangeContentIfError>
                    {
                        processing
                            ? <CircularLoader />
                            : <div>
                                {
                                    searchError
                                        ? <SearchError />
                                        : <div>
                                            <UserInformation
                                                user={user}
                                            />
                                            <UserTabs
                                                user={user}
                                            />
                                        </div>
                                }
                            </div>
                    }
                </ChangeContentIfError>
            </div>
        );
    };
}

export default UserProfile;