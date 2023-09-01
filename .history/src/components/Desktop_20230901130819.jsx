import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import image from "../assets/images/1.png";

const Desktop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxSizing:"border-box",
        px: "200px",
        width: "100vw",
        height: "100vh",
        backgroundColor: grey[900],
      }}
    >
        
      <Box sx={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", width: "60%" }}>
        <Typography variant="h4" sx={{fontWeight: 600, textTransform:"uppercase"}} color={grey[100]}>Quick Tok - tik tok style app</Typography>
        <Typography color={grey[100]}>Quick Tok - tik tok style app</Typography>
        <Typography color={grey[100]}>Quick Tok - tik tok style app</Typography>
        <Typography color={grey[100]}>Quick Tok - tik tok style app</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40%" }}>
        <CardMedia
          component="img"
          image={image}
          alt="Sample Image"
          sx={{
            color: grey[600],
            height: "500px",
            width: "fit-content",
            borderRadius: 5,
            objectFit: "contain",
            filter: "drop-shadow(5px 5px 5px"
          }}
        />
      </Box>
    </Box>
  );
};

export default Desktop;
