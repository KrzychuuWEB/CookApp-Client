import {createMuiTheme} from "@material-ui/core";

export const themeMUI = createMuiTheme({
    palette: {
        primary: {
            main: '#43a047',
        },
        secondary: {
            main: '#ec407a',
        },
        gray: "#9e9e9e",
    },

    typography: {
        useNextVariants: true,
        fontSize: 12,
    },

    overrides: {
        MuiFab: {
            root: {
                position: 'fixed',
                bottom: '40px',
                right: '40px',
            }
        },
    },

    breakpoints: {
        values: {
            zero: 0,
            xs: 480,
            sm: 768,
            md: 1024,
            lg: 1280,
            xl: 1800,
        },
    },
});