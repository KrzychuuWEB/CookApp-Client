import React from "react";
import {Redirect, Route} from "react-router-dom";
import {getUserStorage} from "./storage/user.storage";
import { routePath } from "./pages.routes";

export const DisabledIfLogged = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            getUserStorage()
                ? (<Redirect to={{
                    pathname: routePath.home,
                    state: {from: props.location}
                }} />)
                : (<Component {...props} />)
        }
    />
);

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            getUserStorage()
                ? (<Component {...props} />)
                : (<Redirect to={{
                        pathname: routePath.login,
                        state: {from: props.location}
                    }} />
                )
        }
    />
);