import React from "react";
import { Box } from "@mui/material";

const Bottomgradient = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 1,
        bottom: "8vh",
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        height: "6vh",
        width: "100%"
      }}
    >
      Bottomgradient
    </Box>
  );
};

export default Bottomgradient;
