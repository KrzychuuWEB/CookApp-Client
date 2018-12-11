import React, { Component } from 'react';
import NavBar from "./NavBar";

class Header extends Component {
    render() {
        return(
            <div>
                <NavBar/>
                <div style={{marginTop: 80}}/>
            </div>
        );
    };
}

export default Header;