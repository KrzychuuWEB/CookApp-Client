import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import Header from './components/Header';
import Home from './views/Home';
import Login from "./views/User/Login";
import Register from "./views/User/Register";
import ReadRecipe from "./views/Recipe/Read";
import UploadRecipe from "./views/Recipe/Upload";
import UserProfile from "./views/User/Profile";
import AccountSettings from "./views/User/Settings";
import Logout from "./views/User/Logout";
import NotFound from "./views/Errors/NotFound";
import {DisabledIfLogged, PrivateRoute} from "./helpers/privateRoute";
import HandleGlobalApiError from "./helpers/api/interceptor/globalInterceptorHandler";
import License from "./views/License";

class App extends Component {
    render() {
        const loader = document.getElementById('md-loader');

        if(loader) {
            loader.classList.add("hide-loader");
        }

        return (
            <Router>
                <HandleGlobalApiError>
                    <ScrollToTop>
                        <div className="container">
                            <Header />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/recipe/:recipeSlug" component={ReadRecipe} />
                                <Route exact path="/user/:username" component={UserProfile} />
                                <Route exact path="/license" component={License} />
                                <DisabledIfLogged exact path="/login" component={Login} />
                                <DisabledIfLogged exact path="/register" component={Register} />
                                <PrivateRoute exact path="/logout" component={Logout} />
                                <PrivateRoute exact path="/upload" component={UploadRecipe} />
                                <PrivateRoute exact path="/settings" component={AccountSettings} />
                                <Route exact component={NotFound} />
                            </Switch>
                        </div>
                    </ScrollToTop>
                </HandleGlobalApiError>
            </Router>
        );
    }
}

export default App;
