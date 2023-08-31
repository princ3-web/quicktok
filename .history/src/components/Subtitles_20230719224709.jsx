import React from "react";
import { Box, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const Subtitles = () => {
  return (
    <Box sx={{ zIndex: 1, border: "1px solid red" }}>
      <Typography sx={colgrey[900]}>Title</Typography>
      <Typography sx={grey[900]}>Subtitles</Typography>
      <Typography sx={grey[900]}></Typography>
    </Box>
  );
};

export default Subtitles;
