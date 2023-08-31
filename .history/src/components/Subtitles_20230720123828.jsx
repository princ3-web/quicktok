import React from "react";
import { grey } from "@material-ui/core/colors";
import { Typography, Box } from "@mui/material";

const Subtitles = ({title, subtitle}) => {
  return (
    <Box
      sx={{
        zIndex: 1,
        paddingInline: "0.75rem",
        paddingBottom: "3rem",
        paddingTop: "3rem",
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)",
        width: "100vw",
      }}
    >
      <Typography sx={{ color: grey[100] }} fontWeight={600}>{title}</Typography>
      <Typography sx={{ color: grey[100] }} >{subtitle}</Typography>
    </Box>
  );
};

export default Subtitles;
