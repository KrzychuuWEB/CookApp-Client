import React, { Component } from 'react';
import {Avatar} from "@material-ui/core";

class UserAvatar extends Component {
    usernameCutAndUppercaseFirstLetter = (name) => {
        let firstLetter = name.substring(0, 1);

        return firstLetter.toUpperCase();
    };

    render() {
        const { username, url, color, size } = this.props;
        const style = {
            width: size + "px",
            height: size + "px",
            backgroundColor: color,
        };

        return (
            <div>
                {
                    color
                        ? <Avatar style={style}>{this.usernameCutAndUppercaseFirstLetter(username)}</Avatar>
                        : <Avatar style={style} src={url} alt={"User avatar" + username} />
                }
            </div>
        );
    }
}

export default UserAvatar;