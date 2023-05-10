import { createTheme, responsiveFontSizes } from '@mui/material';


let theme = createTheme({
    typography: {
        fontFamily: [
            'Hanken Grotesk',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: 'Blinker',
            fontWeight: '800'
        },
        h2: {
            fontFamily: 'Blinker',
            fontWeight: '400'
        }
    },
    palette: {
        primary: {
            main: "#FFFFF",
            black: "#081517",
            purple: "#997CB2",
            rose: "#FBCBC5",
            yellow: "#FFD171",
            turqois: "#59C6B8",
            blue: "#1547A3",
        },
        light: {
            purple: "#6C3B96",
            rose: "#FBDBD8",
            yellow: "#FFDD97",
            turqois: "#8EEBDF",
            blue: "#4579D9",
        }
    }
});

// theme.typography.h1 = {
//     fontFamily: 'Maven Pro',
// }

theme = responsiveFontSizes(theme);


export default theme;