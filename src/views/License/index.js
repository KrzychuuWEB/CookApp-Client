import React, { Component } from 'react';
import LicenseCard from "../../components/License";

class License extends Component {
    render() {
        return (
            <div>
                <LicenseCard
                    licenseName="React"
                    href="https://github.com/facebook/react"
                >
                    Copyright (c) Facebook, Inc. and its affiliates.
                </LicenseCard>

                <LicenseCard
                    licenseName="Axios"
                    href="https://github.com/axios/axios"
                >
                    Copyright (c) 2014-present Matt Zabriskie
                </LicenseCard>

                <LicenseCard
                    licenseName="Material-UI"
                    href="https://github.com/mui-org/material-ui"
                >
                    Copyright (c) 2014 Call-Em-All
                </LicenseCard>

                <LicenseCard
                    licenseName="JWT-Decode"
                    href="https://github.com/auth0/jwt-decode"
                >

                    Copyright (c) 2015 Auth0, Inc. {`<support@auth0.com>`} (http://auth0.com)
                </LicenseCard>

                <LicenseCard
                    licenseName="React-Router"
                    href="https://github.com/ReactTraining/react-router"
                >
                    Copyright (c) React Training 2016-2018
                </LicenseCard>

                <LicenseCard
                    licenseName="React-Scroll-Up"
                    href="https://github.com/milosjanda/react-scroll-up"
                >
                    Copyright (c) 2015 Miloš Janda
                </LicenseCard>
            </div>
        );
    }
}

export default License;