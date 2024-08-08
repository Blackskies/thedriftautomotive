import { Box, Container, Typography } from "@mui/material";
import Services from "../../Components/Services";
import theme from "../../theme";

const ServicesPage = () => {
    const containerStyle = {
        marginBottom: 4
    }

    const typographyStyle = {
        color: theme.palette.primary.main,
        fontWeight: 900,
        marginTop: 3
    }
    return <>
        <Container
            maxWidth="xl"
            sx={containerStyle}
        >
            <Typography variant="h2" sx={typographyStyle}>Services</Typography>
            <Services />
        </Container>
    </>
}

export default ServicesPage;