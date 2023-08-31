import React from "react";
import { Box, Typography } from "@material-ui/core";
import grey

const Subtitles = () => {
  return (
    <Box sx={{ zIndex: 1, border: "1px solid red" }}>
      <Typography>Title</Typography>
      <Typography>Subtitles</Typography>
      <Typography></Typography>
    </Box>
  );
};

export default Subtitles;