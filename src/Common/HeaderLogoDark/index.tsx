import { Grid, Typography } from '@mui/material'
import LogoImage from '../../Assets/Logo/imageLogoTransparent.png'
import theme from '../../theme'
const HeaderLogoDark = () => {
    const logoStyle = {
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: 0.5,
        paddingBottom: 0.5,
    }
    const headerLogoStyle = {
        marginLeft: "auto",
        marginRight: "auto",
    }

    const headerTextStyle = {
        marginLeft: "auto",
        marginRight: "auto",
    }

    const typographyStyle = {
        mr: "auto",
        ml: "auto",
        fontFamily: 'Bernier',
        color: theme.palette.primary.contrastText,
        fontSize: 42,
        textShadow: "3px 3px 0 " + theme.palette.secondary.main,
    }

    return <>
        <Grid container sx={headerLogoStyle}>
            <Grid item sx={logoStyle}>
                <img src={LogoImage} height="55" width="220" style={logoStyle} />
            </Grid>
            <Grid item sx={headerTextStyle}>
                <Typography
                    variant="h5"
                    sx={typographyStyle}
                >
                    The Drift Automotive
                </Typography>
            </Grid>
        </Grid>
    </>
}

export default HeaderLogoDark