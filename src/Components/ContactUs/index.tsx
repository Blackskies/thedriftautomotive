import { Box, Grid, Typography } from "@mui/material"
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../../theme"
import HeaderLogoDark from "../../Common/HeaderLogoDark";

const ContactUs = () => {
    const addressList = [
        'Plot No. 3-133/10',
        'Kanchi Gachibowli Rd',
        'Behind Sri Krishna Impex Marbles and Granites',
        'Vattinagulapally',
        'Hyderabad',
        'Telangana 500075'
    ]
    const phoneNumbers = ['+91 97007 22270', '+91 99891 23375']
    const emailList = ['service@thedrift.co.in']
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.949910470616!2d78.2916798757796!3d17.41419130203124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f6f2c2848f%3A0x2928738116621367!2sTHE%20DRIFT%20AUTOMOTIVE!5e0!3m2!1sen!2sin!4v1723278867997!5m2!1sen!2sin"

    const addressStyle = {
        color: theme.palette.primary.main,
        fontWeight: 500,
        fontSize: 20
    }

    const iconsStyle = {
        color: theme.palette.secondary.main,
        fontSize: 30,
    }

    const addressTextBlock = {
        background: theme.palette.primary.dark,
        padding: 3
    }

    const desktopView = {
        display: { xs: 'none', md: 'block' }
    }

    const mobileView = {
        display: { xs: 'block', md: 'none' }
    }

    const mapStyle = {
        filter: "invert(90%)",
        border: 0,
        width: "100%"
    }

    return <>
        <Box
            mt={4}
            sx={desktopView}
        >

            {/* Desktop View */}

            <Grid container  >
                {/* Logo and address block */}
                <Grid
                    item
                    md={5}
                    sx={addressTextBlock}
                >
                    <HeaderLogoDark />

                    {/* Address Content block */}
                    <Grid container mt={2}>
                        <Grid md={2}>
                            <WhereToVoteIcon sx={iconsStyle} />
                        </Grid>
                        <Grid md={10} >
                            {
                                addressList.map((element, indx) => (
                                    <Typography
                                        sx={addressStyle}>
                                        {element}{indx != (addressList.length - 1) ? "," : ""}
                                        <br />
                                    </Typography>
                                ))
                            }
                        </Grid>

                    </Grid>

                    {/* Phone Content block */}
                    <Grid container mt={2}>
                        <Grid md={2}>
                            <PhoneCallbackIcon sx={iconsStyle} />
                        </Grid>
                        <Grid md={10}>
                            {
                                phoneNumbers.map((element) => (
                                    <Typography
                                        sx={addressStyle}>
                                        {element}
                                        <br />
                                    </Typography>
                                )
                                )
                            }
                        </Grid>
                    </Grid>

                    {/* Email Content block */}
                    <Grid container sx={{ marginTop: 2 }}>
                        <Grid md={2}>
                            <EmailIcon sx={iconsStyle} />
                        </Grid>
                        <Grid md={10}>
                            {
                                emailList.map((element) => (
                                    <Typography
                                        sx={addressStyle}>
                                        {element}
                                        <br />
                                    </Typography>
                                )
                                )
                            }
                        </Grid>

                    </Grid>

                </Grid>

                {/* Google Map iframe block */}
                <Grid item md={7}>
                    <iframe
                        src={mapUrl}
                        height="100%"
                        loading="lazy"
                        style={mapStyle}
                    ></iframe>
                </Grid>
            </Grid>
        </ Box >
        <Box
            mt={4}
            sx={mobileView}
        >
            {/* Mobile View */}
            <Grid sx={mobileView} container>
                {/* Logo and address block */}
                <Grid
                    sx={addressTextBlock}
                >

                    <HeaderLogoDark />

                    {/* Address Content block */}
                    <Grid container mt={2}>
                        <Grid sm={1} xs={2} item>
                            <WhereToVoteIcon sx={iconsStyle} />
                        </Grid>
                        <Grid sm={11} xs={10} item>
                            {
                                addressList.map((element) => (
                                    <Typography
                                        sx={addressStyle}>
                                        {element}
                                        <br />
                                    </Typography>
                                ))
                            }
                        </Grid>

                    </Grid>

                    {/* Phone Content block */}
                    <Grid container mt={2}>
                        <Grid sm={1} xs={2}>
                            <PhoneCallbackIcon sx={iconsStyle} />
                        </Grid>
                        <Grid sm={11} xs={10}>
                            {
                                phoneNumbers.map((element) => (
                                    <Typography
                                        sx={addressStyle}>
                                        {element}
                                        <br />
                                    </Typography>
                                )
                                )
                            }
                        </Grid>
                    </Grid>

                    {/* Email Content block */}
                    <Grid container sx={{ marginTop: 2 }}>
                        <Grid sm={1} xs={2}>
                            <EmailIcon sx={iconsStyle} />
                        </Grid>
                        <Grid sm={11} xs={10}>
                            {
                                emailList.map((element) => (
                                    <Typography
                                        sx={addressStyle}>
                                        {element}
                                        <br />
                                    </Typography>
                                )
                                )
                            }
                        </Grid>

                    </Grid>

                </Grid>

                {/* Google Map iframe block */}
                <Grid>
                    <iframe
                        src={mapUrl}

                        height="350"
                        loading="lazy"
                        style={mapStyle}
                    ></iframe>
                </Grid>
            </Grid>

        </Box >
    </>
}

export default ContactUs