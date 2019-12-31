import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {DisabledIfLogged, PrivateRoute} from "./helpers/routesConfig";
import HomeContainer from "./containers/home";
import LogoutContainer from "./containers/user/logout";
import AccountContainer from "./containers/user/accountActionList";
import LoginContainer from "./containers/user/login";
import RegisterContainer from "./containers/user/register";
import OtherComponents from "./helpers/otherComponents";

const App = () => {
    return (
        <BrowserRouter>
            <OtherComponents>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <PrivateRoute exact path="/logout" component={LogoutContainer} />
                    <DisabledIfLogged exact path="/account" component={AccountContainer} />
                    <DisabledIfLogged exact path="/account/login" component={LoginContainer} />
                    <DisabledIfLogged exact path="/account/register" component={RegisterContainer} />
                </Switch>
            </OtherComponents>
        </BrowserRouter>
    );
};

export default App;
