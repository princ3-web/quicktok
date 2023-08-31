import React from "react";
import { grey } from "@material-ui/core/colors";
import { Typography, Box } from "@mui/material";

const Subtitles = () => {
  return (
    <Box
      sx={{
        zIndex: 1,
        paddingInline: "1rem",
        paddingBottom: "4rem",
        background: "linear-gradient(to bottom, #FE6B8B 30%, #FF8E53 90%)",
        width: "100vw"
      }}
    >
      <Typography sx={{ color: grey[100] }}>Title</Typography>
      <Typography sx={{ color: grey[100] }}>Subtitles</Typography>
      <Typography sx={{ color: grey[100] }}></Typography>
    </Box>
  );
};

export default Subtitles;
