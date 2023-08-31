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
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
        width: "100vw",
      }}
    >
      <Typography sx={{ color: grey[100] }}>Title</Typography>
      <Typography sx={{ color: grey[100] }}>Subtitles</Typography>
      <Typography sx={{ color: grey[100] }}></Typography>
    </Box>
  );
};

export default Subtitles;
