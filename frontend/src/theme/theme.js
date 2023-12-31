import { createTheme, responsiveFontSizes } from '@mui/material';


// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px


let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#081517',
            light: '#627A7D',
        },
        secondary: {
            main: '#184CCA',
        },
        background: {
            main: '#ffffff',
            // paper: '#ffffff',
            contrastText: '#000000'
        },
        info: {
            main: '#a4b0ff',
            contrastText: '#fff'
        },

        customColors: {
            purple: {
                dark: '#184CCA',
                main: '#969CFE',
                light: '#A4B0FF',
                hover:'#D5D8F1',
            },
            salmon: {
                dark: '#E45B56',
                main: '#FCA78A',
                contrastText: '#fff'
            },
            blue: {
                dark: '#1C2A4A',
                main: '#2271E6',
                contrastText: '#fff',
                light:'#D9DEE8'
            },
            grey: {
                lighter: '#F8F4F4',
                light: '#E8E4E1',
                main: '#B8AFA9',
                dark: '#7A7572'
            }
        },

        // To fix Chip component color attribute
        salmon: {
            main: '#FCA78A',
            contrastText: '#081517'
        },

    },


    typography: {
        fontFamily: 'Hanken Grotesk',
        h1: {
            fontFamily: 'Encode Sans Expanded',
            fontWeight: 300,
        },
        h2: {
            fontFamily: 'Encode Sans Expanded',
            fontWeight: 400,
        },
        h3: {
            fontFamily: 'Encode Sans Expanded',
            fontWeight: 300,
            fontSize: '2.5rem',
            marginBottom: 16,
        },
        h4: {
            fontFamily: 'Encode Sans Expanded',
            fontWeight: 300,
            fontSize: '1.7rem',
            marginBottom: 10,

        },
        h5: {
            fontWeight: 600,
            fontFamily: 'Encode Sans Expanded',
            fontSize: '1.3rem',
        },
        h6: {
            fontWeight: 500,
            fontFamily: 'Encode Sans Expanded',
            fontSize: '1rem',
            marginBottom: 10,
        },
        subtitle1: {
            fontSize: '.8rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            marginBottom: 10,
        },
        button: {
            fontWeight: 600,
        },
        overline: {
            fontSize: '0.6rem',
        },
        listitem: {
            fontSize: '.5rem',
            fontWeight: 800,
            fontFamily: 'Encode Sans Expanded',

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
        },
        MuiCardContent: {
            padding: '0'
        }
    },

    spacing: 10,
});


// theme.typography.h1 = {
//     fontFamily: 'Maven Pro',
// }

theme = responsiveFontSizes(theme);


export default theme;