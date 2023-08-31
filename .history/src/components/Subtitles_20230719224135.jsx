import React from "react";
import { Box, Typography } from "@material-ui/core";

const Subtitles = () => {
  return (
    <Box sx={{position:"absolute", left: 0}}>
      <Typography>Title</Typography>
      <Typography>Subtitles</Typography>
      <Typography></Typography>
    </Box>
  );
};

export default Subtitles;
