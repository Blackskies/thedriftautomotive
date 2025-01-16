import { Container } from "@mui/material";
import Hightlights from "../../Components/Highlights";

const HighlightsPage = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        id="Highlights"
        sx={{ marginTop: 5, marginBottom: 5 }}
      >
        <Hightlights />
      </Container>
    </>
  );
};

export default HighlightsPage;
