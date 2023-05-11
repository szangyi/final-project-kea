import { createTheme, responsiveFontSizes } from '@mui/material';


// let theme = createTheme({
//     typography: {
//         fontFamily: [
//             'Hanken Grotesk',
//             'sans-serif',
//         ].join(','),
//         h1: {
//             fontFamily: 'Encode Sans Expanded',
//             fontWeight: '800'
//         },
//         h2: {
//             fontFamily: 'Encode Sans Expanded',
//             fontWeight: '400'
//         },
//         h3: {
//             fontFamily: 'Encode Sans Expanded',
//             fontWeight: '400'
//         },
//         h4: {
//             fontFamily: 'Encode Sans Expanded',
//             fontWeight: '800'
//         },
//         navlink: {
//             fontFamily: 'Encode Sans Expanded',
//             fontWeight: '400'
//         }
//     },
//     palette: {
//         primary:{
//             main: "#081517",
//         },
//         dark: {
//             main: "#FFFFF",
//             black: "#081517",
//             purple: "#997CB2",
//             rose: "#FBCBC5",
//             yellow: "#FFD171",
//             turqois: "#59C6B8",
//             blue: "#1547A3",
//         },
//         light: {
//             purple: "#6C3B96",
//             rose: "#FBDBD8",
//             yellow: "#FFDD97",
//             turqois: "#8EEBDF",
//             blue: "#4579D9",
//         }
//     }
// });


// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#081517',
        },
        secondary: {
            main: '#184CCA',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        info: {
            main: '#a4b0ff',
        },

        customColors: {
            purple: {
                dark: '#184CCA',
                main: '#969CFE',
                light: '#A4B0FF',
            }
        }

    },


    typography: {
        fontFamily: 'Hanken Grotesk',
        h1: {
            fontFamily: 'Encode Sans Expanded',
            fontWeight: 800,
        },
        h2: {
            fontFamily: 'Encode Sans Expanded',
            fontWeight: 800,
        },
        h3: {
            fontFamily: 'Encode Sans Expanded',
            fontWeight: 800,
            fontSize: '2.5rem',
        },
        h4: {
            fontFamily: 'Encode Sans Expanded',
            fontWeight: 800,
            fontSize: '1.7rem',
        },
        h5: {
            fontWeight: 800,
            fontFamily: 'Encode Sans Expanded',
            fontSize: '1.4rem',
        },
        h6: {
            fontWeight: 800,
            fontFamily: 'Encode Sans Expanded',
            fontSize: '1.2rem',
        },
        subtitle1: {
            fontSize: '1rem',
            textDecoration: 'uppercase',
        },
        button: {
            fontWeight: 600,
        },
        overline: {
            fontSize: '0.6rem',
        },
    },
    shape: {
        borderRadius: 0,
    },
    props: {
        MuiAppBar: {
            color: 'transparent',
        },
        MuiTooltip: {
            arrow: true,
        },
    },
    spacing: 10,
});


// theme.typography.h1 = {
//     fontFamily: 'Maven Pro',
// }

theme = responsiveFontSizes(theme);


export default theme;