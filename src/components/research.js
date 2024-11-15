import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import researchImg from "../image/research1.jpg";
function Research() {
  return (
    <>
      <Box>
        <Typography>RESEARCH OVERVIEW</Typography>
        <Box
          sx={{ border: "1px solid black" }}
          maxWidth={120}
          margin={"auto"}
          marginTop={1}
        ></Box>
        <img
          src={researchImg}
          alt="research-img"
          style={{ maxHeight: "300px", maxWidth: "100%" }}
        />
      </Box>
    </>
  );
}

export default Research;
