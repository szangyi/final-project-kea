import { createTheme, responsiveFontSizes } from '@mui/material';


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
            },
            salmon: {
                dark: '#E45B56',
                main: '#FCA78A'
            },
            blue: {
                dark: '#1C2A4A',
                main: '#2271E6',
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
        IconButton: {
            // color: 'primary',
        }
    },
    spacing: 10,
});


// theme.typography.h1 = {
//     fontFamily: 'Maven Pro',
// }

theme = responsiveFontSizes(theme);


export default theme;