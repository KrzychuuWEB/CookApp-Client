import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {themeMUI} from "./helpers/theme";
import { MuiThemeProvider } from "@material-ui/core";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={themeMUI}>
            <App />
        </MuiThemeProvider>
    </Provider>
    ,document.getElementById('root')
);