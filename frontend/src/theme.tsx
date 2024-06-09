import { ThemeOptions } from '@mui/material/styles';

export const THEME: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#28b8b8',
        },
        secondary: {
            main: '#335c6e',
        },
        text: {
            primary: '#5acccc',
            secondary: '#345d6d',
        },
        warning: {
            main: '#faad00',
        },
        error: {
            main: '#f76434',
        },
    },

    typography: {
        fontFamily: [
            'Mulish',
            'sans-serif'
        ].join(','),
    },
};