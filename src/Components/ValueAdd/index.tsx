import { Grid, Typography } from "@mui/material";
import theme from "../../theme";
import valueIcon from "../../Assets/icons/diamond.png";

interface props {
  title: string;
  description: string;
}
const ValueAdd = (props: props) => {
  const titleStyle = {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 30,
  };
  const descriptionStyle = {
    marginTop: 1,
    color: theme.palette.primary.contrastText,
    fontSize: 20,
  };
  const cardStyle = {
    paddingLeft: 3,
  };
  const iconStyle = {};
  const imageCardStyle = {
    justifyContent: "center",
    alignItems: "center",
    display: "grid",
    borderRight: theme.palette.secondary.main + " solid 5px",
  };
  return (
    <Grid container mb={5}>
      <Grid item md={1} sm={2} xs={2} sx={imageCardStyle}>
        <img src={valueIcon} width={"60%"} height={"auto"} style={iconStyle} />
      </Grid>
      <Grid sx={cardStyle} item md={11} sm={10} xs={10} pb={1}>
        <Typography sx={titleStyle}>{props.title}</Typography>
        <Typography sx={descriptionStyle}>{props.description}</Typography>
      </Grid>
    </Grid>
  );
};

export default ValueAdd;
