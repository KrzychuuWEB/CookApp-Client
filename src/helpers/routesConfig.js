import React from "react";
import {Redirect, Route} from "react-router-dom";
import {getUserStorage} from "./storage/user.storage";

export const DisabledIfLogged = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            getUserStorage()
                ? (<Redirect to={{
                    pathname: "/",
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
                        pathname: "/login",
                        state: {from: props.location}
                    }} />
                )
        }
    />
);