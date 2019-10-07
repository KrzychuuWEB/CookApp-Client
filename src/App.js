import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import HomeContainer from "./containers/home";
import LoginContainer from "./containers/user/login";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/login" component={LoginContainer} />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
