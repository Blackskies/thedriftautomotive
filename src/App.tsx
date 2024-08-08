import { Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme"
import HeaderAppBar from "./Common/HeaderNavbar";
import FooterBar from "./Common/FooterBar";
import ServicesPage from "./Pages/ServicesPage";

const App = () => {
    const WindowBoxStyle = {
        display: { xs: 'none', md: 'flex' }
    }

    const MobileBoxStyle = {
        display: { xs: 'flex', md: 'none' }
    }

    const bodyStyle = {
        background: theme.palette.primary.dark,
        margin: 0
    }
    return <>
        <Grid container sx={bodyStyle} maxWidth={"false"}>
            <ThemeProvider theme={theme}>
                <HeaderAppBar />
                <ServicesPage />
                <FooterBar />
            </ThemeProvider>
        </Grid>
    </>
};

export default App;
