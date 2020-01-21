import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {themeMUI} from "./utils/theme";
import { MuiThemeProvider } from "@material-ui/core";
import {Provider} from "react-redux";
import store from "./store";
import Index from "./components/notification";

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={themeMUI}>
            <Index>
                <App />
            </Index>
        </MuiThemeProvider>
    </Provider>
    ,document.getElementById('root')
);