import React, { Component } from 'react';
import {Paper, Typography} from "@material-ui/core";
import './license.scss';

class LicenseCard extends Component {
    render() {
        const { children, href, licenseName, siteName } = this.props;

        return (
            <div className="license-container">
                <Paper className="paper">
                    <div className="license-name">
                        <Typography variant="headline" color="secondary">
                            { licenseName } (
                            <a rel="noopener noreferrer" target="_blank" href={href}>
                                {siteName ? siteName : 'GitHub'}
                            </a> )
                        </Typography>
                    </div>

                    <div className="license-text">
                        <Typography variant="caption">
                            The MIT License (MIT)<br/><br/>

                            { children }

                            <br/><br/> Permission is hereby granted, free of charge, to any person obtaining a copy
                            of this software and associated documentation files (the "Software"), to deal
                            in the Software without restriction, including without limitation the rights
                            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to whom the Software is
                            furnished to do so, subject to the following conditions:<br/><br/>

                            The above copyright notice and this permission notice shall be included in all
                            copies or substantial portions of the Software.<br/><br/>

                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                            SOFTWARE.
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default LicenseCard;