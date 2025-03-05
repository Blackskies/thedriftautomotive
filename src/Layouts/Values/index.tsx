import { Container, Typography } from "@mui/material";
import theme from "../../theme";
import ValueAdd from "../../Components/ValueAdd";
import { corevaluesList } from "../../Utils/data";

const Values = () => {
  const containerStyle = {
    marginBottom: 4,
  };

  const typographyStyle = {
    color: theme.palette.secondary.main,
    fontWeight: 900,
    marginTop: 3,
  };
  return (
    <>
      <Container maxWidth="lg" sx={containerStyle} id="Our Values">
        <Typography variant="h3" sx={typographyStyle}>
          Our Core Values
        </Typography>
        <Container maxWidth="lg" sx={{ marginTop: 5 }}>
          {Object.keys(corevaluesList).map((key, index) => (
            <ValueAdd
              title={key}
              key={index}
              description={corevaluesList[key]}
            />
          ))}
        </Container>
      </Container>
    </>
  );
};

export default Values;
