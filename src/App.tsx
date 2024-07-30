import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme"
import HeaderAppBar from "./Common/HeaderNavbar";
import FooterBar from "./Common/FooterBar";

const App = () => {
    return <>
        <ThemeProvider theme={theme}>
            <HeaderAppBar />
            <div style={{ height: 1000, background: theme.palette.primary.dark }}></div>
            <FooterBar />
        </ThemeProvider>
    </>
};

export default App;
