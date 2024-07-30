import { createTheme } from "@mui/material";
// 'Bernier'
const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat'
    },

    palette: {
        background: {
            default: "#1D1D1D",
        },
        primary: {
            main: "#ff9901",
            dark: "#1D1D1D",
            light: "#ffd699",
            contrastText: "#f5f5f5"
        },
        secondary: {
            main: "#995b00",
            dark: "#190f00",
            light: "#3B3B3B",
            contrastText: "#ffeacc"
        }
    },

});

export default theme