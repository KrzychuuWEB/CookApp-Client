import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {DisabledIfLogged, PrivateRoute} from "./services/routesConfig";
import HomeContainer from "./containers/home";
import LogoutContainer from "./containers/user/logout";
import AccountContainer from "./components/accountActionList";
import LoginContainer from "./containers/user/login";
import RegisterContainer from "./containers/user/register";
import OtherComponents from "./utils/otherComponents";
import {routePath} from "./global/pages.routes";

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
