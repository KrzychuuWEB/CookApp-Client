import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {DisabledIfLogged, PrivateRoute} from "./helpers/routesConfig";
import HomeContainer from "./containers/home";
import LogoutContainer from "./containers/user/logout";
import AccountContainer from "./containers/user/accountActionList";
import LoginContainer from "./containers/user/login";
import RegisterContainer from "./containers/user/register";
import OtherComponents from "./helpers/otherComponents";
import {routePath} from "./helpers/pages.routes";

const App = () => {
    return (
        <BrowserRouter>
            <OtherComponents>
                <Switch>
                    <Route exact path={routePath.home} component={HomeContainer} />
                    <PrivateRoute exact path={routePath.logout} component={LogoutContainer} />
                    <DisabledIfLogged exact path={routePath.account} component={AccountContainer} />
                    <DisabledIfLogged exact path={routePath.login} component={LoginContainer} />
                    <DisabledIfLogged exact path={routePath.register} component={RegisterContainer} />
                </Switch>
            </OtherComponents>
        </BrowserRouter>
    );
};

export default App;
