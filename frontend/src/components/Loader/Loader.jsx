/** @format */

import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

export default function FullScreenLoader() {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Container>
  );
}
