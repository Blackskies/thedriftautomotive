import { Grid, Typography } from '@mui/material'
import LogoImage from '../../Assets/Logo/thedriftlogo.png'
import theme from '../../theme'
const HeaderLogo = () => {
    const logoStyle = {
        marginRight: '0.2rem',
        marginLeft: '0.2rem',
        paddingTop: 0.5,
        paddingBottom: 0.5,
    }
    const headerLogoStyle = {
        background: theme.palette.primary.main,
        marginRight: '0.5rem',
        width: 'auto'
    }

    const typographyStyle = {
        mr: 2,
        ml: 2,
        fontFamily: 'Bernier',
        color: theme.palette.primary.contrastText,
        fontSize: 42,
        textDecoration: 'none',
        display: { xs: 'none', md: 'flex' },
    }

    return <>
        <Grid container sx={headerLogoStyle}>
            <Grid item sx={logoStyle}>
                <img src={LogoImage} height="43" width="172" style={logoStyle} />
            </Grid>
            <Grid item>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={typographyStyle}
                >
                    The Drift Automotive
                </Typography>
            </Grid>
        </Grid>
    </>
}

export default HeaderLogo