import { createTheme } from '@mui/material';


const theme = createTheme({
    typography: {
        fontFamily: [
            'Hanken Grotesk',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: "#FBCBC5"
        }
    }
});

export default theme;