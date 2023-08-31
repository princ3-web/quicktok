import React from "react";
import { grey } from "@material-ui/core/colors";
import typogra

const Subtitles = () => {
  return (
    <Box sx={{ zIndex: 1, border: "1px solid red" }}>
      <Typography sx={{color: grey[100]}}>Title</Typography>
      <Typography sx={{color: grey[100]}}>Subtitles</Typography>
      <Typography sx={{color: grey[100]}}></Typography>
    </Box>
  );
};

export default Subtitles;
