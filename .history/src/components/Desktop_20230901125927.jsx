import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import image from ""

const Desktop = () => {
  return <Box sx={{ width: "100vw", height: "100vh", backgroundColor: grey[900] }}>
        <CardMedia
          component="img"
          image={userImage}
          alt="Sample Image"
          sx={{
            color: grey[600],
            width: "35px",
            height: "35px",
            borderRadius: 50,
            border: "1px solid" + grey[100],
          }}
        />
  </Box>;
};

export default Desktop;
