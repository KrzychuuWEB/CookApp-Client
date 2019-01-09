import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#43a047',
        },
        secondary: {
            main: '#ec407a',
        },
    },

    typography: {
        useNextVariants: true,
        fontSize: 12,
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>
    , document.getElementById('root'));
