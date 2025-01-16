import { Box, Grid, Typography } from "@mui/material";
import theme from "../../theme";
import HightlightImage from "../../Assets/Images/highlight1.png";

const Hightlights = () => {
  const textStyle = {
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    textAlign: "center",
    marginTop: 0,
    paddingTop: 0,
  };

  const hightlightTextStyle = {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  };

  const logoStyle = {
    paddingTop: 0.5,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const desktopView = {
    display: { xs: "none", md: "block" },
  };

  const mobileView = {
    display: { xs: "block", md: "none" },
  };

  return (
    <>
      <Box sx={desktopView}>
        <Grid xl={12} sx={logoStyle}>
          <img src={HightlightImage} width="100%" style={logoStyle} />
        </Grid>

        <Typography sx={textStyle}>
          We have successfully repaired and restored high-performance and luxury
          vehicles in less than
          <span style={hightlightTextStyle}> 6 months</span>, showcasing
          unmatched precision and expertise.
        </Typography>

        {/* 
      As an authorized service provider, we proudly partner with
      leading automotive brands to offer only genuine parts, ensuring your
        vehicle maintains peak performance and value. Trust us to deliver
        exceptional quality and care for your prized automobile in record time. */}
      </Box>
      <Box sx={mobileView}>
        <Grid container>
          <Grid item sx={logoStyle}>
            <img
              src={HightlightImage}
              height="auto"
              width="100%"
              style={logoStyle}
            />
          </Grid>
          <Typography sx={textStyle}>
            We have successfully repaired and restored high-performance and
            luxury vehicles in less than
            <span style={hightlightTextStyle}> 6 months</span>, showcasing
            unmatched precision and expertise.
          </Typography>

          {/* 
      As an authorized service provider, we proudly partner with
      leading automotive brands to offer only genuine parts, ensuring your
        vehicle maintains peak performance and value. Trust us to deliver
        exceptional quality and care for your prized automobile in record time. */}
        </Grid>
      </Box>
    </>
  );
};

export default Hightlights;
