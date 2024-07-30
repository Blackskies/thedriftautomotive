import { AppBar, Grid, Typography } from "@mui/material"
import theme from "../../theme"

const FooterBar = () => {
    const AppBarStyle = {
        background: theme.palette.primary.dark,
        width: '100%',
        borderTop: '0.4rem solid',
        borderColor: theme.palette.primary.main,
    }

    const TypographyStyle = {
        color: theme.palette.primary.contrastText,
        mr: 2,
        fontSize: 25,
        fontFamily: 'Bernier',
        paddingTop: 1,
        paddingBottom: 1,
    }

    return <>
        <Grid sx={AppBarStyle}>
            <Typography variant="h5" sx={TypographyStyle} textAlign={"end"}>&#169; The Drift Automotive.</Typography>
        </Grid>
    </>
}

export default FooterBar