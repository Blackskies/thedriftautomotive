import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import theme from '../../theme';
import { Drawer } from '@mui/material';
import HeaderLogo from '../HeaderLogo';
const pages = ['Services', 'Contact Us'];

const HeaderAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const scrollAndClose = (page: string) => {
        handleCloseNavMenu();
        if (pages.includes(page)) {
            const elementToScroll = document.getElementById(page);
            const elementPosition = elementToScroll.getBoundingClientRect().top;
            window.scrollTo({
                top: elementPosition - 30,
                behavior: "smooth"
            });
        }
    }

    const AppBarStyle = {
        background: theme.palette.primary.dark,
        width: '100%',
        borderBottom: '0.3rem solid',
        borderColor: theme.palette.primary.main,
        opacity: "90%"
    }

    const WindowBoxStyle = {
        display: { xs: 'none', md: 'flex' }
    }

    const MobileBoxStyle = {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' }
    }

    const MobileDrawerButtonStyle = {
        background: theme.palette.primary.dark,
        ":hover": {
            background: theme.palette.primary.main,
            color: theme.palette.primary.light,
        },
        borderRadius: 0,
        paddingTop: '1rem',
        paddingBottom: '1rem'
    }

    const DrawerButtonTextStyle = {
        fontWeight: 700,
        fontSize: 18,
    }

    const HeaderButtonStyle = {
        color: theme.palette.primary.main,
        fontSize: 20,
        fontWeight: 700,
        mx: '1rem'
    }


    return (
        <AppBar position="sticky" sx={AppBarStyle}>

            {/* For full window */}
            <Box sx={WindowBoxStyle}>
                <HeaderLogo />
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => { scrollAndClose(page) }}
                        sx={HeaderButtonStyle}
                    >
                        {page}
                    </Button>
                ))}
            </Box>

            {/* For Mobile View */}
            <Box sx={MobileBoxStyle}>
                <HeaderLogo />
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    sx={{ marginLeft: 'auto' }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor={'top'}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    {pages.map((page) => (
                        <Button variant='text' key={page} sx={MobileDrawerButtonStyle} onClick={() => { scrollAndClose(page) }}>
                            <Typography textAlign="center" sx={DrawerButtonTextStyle}>{page}</Typography>
                        </Button>
                    ))}
                </Drawer>
            </Box>
        </AppBar >
    );
}
export default HeaderAppBar;
