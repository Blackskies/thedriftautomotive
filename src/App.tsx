import { Grid, ThemeProvider } from "@mui/material";
import theme from "./theme"
import HeaderAppBar from "./Common/HeaderNavbar";
import FooterBar from "./Common/FooterBar";
import ServicesPage from "./Pages/ServicesPage";
import Background from "./Assets/Images/sampleBackground.jpg"
import ContactUs from "./Pages/ContactUsPage";

const App = () => {
    const WindowBoxStyle = {
        display: { xs: 'none', md: 'flex' }
    }

    const MobileBoxStyle = {
        display: { xs: 'flex', md: 'none' }
    }

    const bodyStyle = {
        // background: theme.palette.primary.dark,
        backgroundImage: `url(${Background})`,
        backgroundSize: "250px 250px ",
        margin: 0
    }
    return <>
        <Grid container sx={bodyStyle} maxWidth={"false"}>
            <ThemeProvider theme={theme}>
                <HeaderAppBar />
                <ServicesPage />
                <ContactUs />
                <FooterBar />
            </ThemeProvider>
        </Grid>
    </>
};

export default App;
