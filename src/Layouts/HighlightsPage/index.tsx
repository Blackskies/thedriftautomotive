import { Container, Grid } from "@mui/material";
import Hightlights from "../../Components/Highlights";

const HighlightsPage = () => {
  return (
    <>
      <Grid
        width="60%"
        id="Highlights"
        sx={{
          marginTop: 5,
          marginBottom: 5,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Hightlights />
      </Grid>
    </>
  );
};

export default HighlightsPage;
