import { Grid } from "@mui/material";
import HeaderAppBar from "../../Common/HeaderNavbar";
import ServicesPage from "../ServicesPage";
import Background from "../../Assets/Images/sampleBackground.jpg";
import FooterBar from "../../Common/FooterBar";
import ContactUsPage from "../ContactUsPage";
import HighlightsPage from "../HighlightsPage";

const MainPage = () => {
  const bodyStyle = {
    // background: theme.palette.primary.dark,
    backgroundImage: `url(${Background})`,
    backgroundSize: "250px 250px ",
    margin: 0,
  };
  return (
    <>
      <Grid container sx={bodyStyle} maxWidth={"false"}>
        <HeaderAppBar />
        <HighlightsPage />
        <ServicesPage />
        <ContactUsPage />
        <FooterBar />
      </Grid>
    </>
  );
};

export default MainPage;
