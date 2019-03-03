import { Component } from 'react';
import { withRouter } from "react-router-dom";
import {destroyUserStorage} from "../../../helpers/storage/user.storage";

class Logout extends Component {
    componentDidMount() {
        destroyUserStorage();

        this.props.history.push("/");
    }

    render() {
        return false;
    }
}

export default withRouter(Logout);