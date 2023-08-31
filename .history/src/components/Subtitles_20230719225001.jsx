import React from "react";
import { grey } from "@material-ui/core/colors";
import { Typography, Box } from "@mui/material";

const Subtitles = () => {
  return (
    <Box sx={{ zIndex: 1, background:  }}>
      <Typography sx={{color: grey[100]}}>Title</Typography>
      <Typography sx={{color: grey[100]}}>Subtitles</Typography>
      <Typography sx={{color: grey[100]}}></Typography>
    </Box>
  );
};

export default Subtitles;
