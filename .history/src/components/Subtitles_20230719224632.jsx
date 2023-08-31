import React from "react";
import { Box, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const Subtitles = () => {
  return (
    <Box sx={{ zIndex: 1, border: "1px solid red" }}>
      <Typography color={grey[100]}>Title</Typography>
      <Typography>Subtitles</Typography>
      <Typography></Typography>
    </Box>
  );
};

export default Subtitles;
