import React from "react";
import { Box, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image from "../assets/images/1.png";

const Desktop = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: grey[900] }}>
      <CardMedia
        component="img"
        image={image}
        alt="Sample Image"
        sx={{
          color: grey[600],
          height: "600px",
          width: "300px",
          borderRadius: 5,
          objectFit:"contain",
          border: "1px solid red"
        }}
      />
    </Box>
  );
};

export default Desktop;
