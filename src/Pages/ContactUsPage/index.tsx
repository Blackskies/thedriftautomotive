import { Container, Grid, Typography } from "@mui/material"
import theme from "../../theme"
import ContactUs from "../../Components/ContactUs";

const ContactUsPage = () => {

    const typographyStyle = {
        color: theme.palette.primary.main,
        fontWeight: 900,
        marginTop: 3
    }

    return <>
        <Container maxWidth="lg">

            <Typography
                noWrap
                sx={typographyStyle}
                variant="h3"
            >
                Locate Us
            </Typography>

            <ContactUs />
        </Container>
    </>
}

export default ContactUsPage;