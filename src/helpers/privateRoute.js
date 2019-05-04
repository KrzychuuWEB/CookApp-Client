import React from "react";
import {Redirect, Route} from "react-router-dom";
import {getUser} from "./storage/user.storage";

export const DisabledIfLogged = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            getUser()
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
            getUser()
                ? (<Component {...props} />)
                : (<Redirect to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }} />
                )
        }
    />
);
