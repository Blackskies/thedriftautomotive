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
            main: "#FF9100",
            dark: "#1D1D1D",
            light: "#ffdca8",
            contrastText: "#f5f5f5",
        },
        secondary: {
            main: "#FF4800",
            dark: "#190f00",
            light: "#3B3B3B",
            contrastText: "#FFB600"
        }
    },

});

export default theme