import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import theme from "../../theme";

import { servicesList } from "../../Utils/data";

const Services = () => {
  const cardStyle = {
    background: theme.palette.primary.dark,
    display: "flex",
    marginTop: 4,
    borderRadius: 0,
    width: "100%",
  };

  const mobileCardStyle = {
    background: theme.palette.primary.dark,
    width: "100%",
    marginTop: 4,
    borderRadius: 0,
    opacity: "95%",
  };

  const serviceTitle = {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 30,
  };

  const serviceDescription = {
    color: theme.palette.primary.contrastText,
    fontWeight: 500,
    marginTop: 3,
    fontSize: 20,
    marginBottom: 1,
  };

  const desktopView = {
    display: { xs: "none", md: "block" },
  };

  const mobileView = {
    display: { xs: "block", md: "none" },
  };

  const serviceImageStyle = {
    width: "38%",
    textShadow: "3px 3px 0 black",
  };

  return (
    <>
      {/* Window View */}
      <Box sx={desktopView}>
        {Object.keys(servicesList).map((service, key) => (
          <Card raised sx={cardStyle} key={"Services" + key.toString()}>
            <CardMedia
              component="img"
              sx={serviceImageStyle}
              image={servicesList[service]["image"]}
              alt={service}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  padding: 5,
                }}
              >
                <Typography sx={serviceTitle}>{service}</Typography>
                <Typography sx={serviceDescription}>
                  {servicesList[service]["description"]}
                </Typography>
              </CardContent>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            </Box> */}
            </Box>
          </Card>
        ))}
      </Box>

      {/* Mobile View */}
      <Box sx={mobileView}>
        {Object.keys(servicesList).map((service, key) => (
          <Card raised sx={mobileCardStyle}>
            <CardMedia
              component="img"
              image={servicesList[service]["image"]}
              alt={service}
            />
            <Box>
              <CardContent
                sx={{
                  padding: 3,
                }}
              >
                <Typography sx={serviceTitle}>{service}</Typography>
                <Typography sx={serviceDescription}>
                  {servicesList[service]["description"]}
                </Typography>
              </CardContent>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            </Box> */}
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Services;
