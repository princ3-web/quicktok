import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [navigator, toggleNavigator] = useState(0);

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "40px",
        top: 0,
        zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) -100%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <IconButton onClick={() => console.log("abc")}>
        <MenuIcon sx={{ color: grey[100] }} fontSize={""large""} />
      </IconButton>
      <Box width={175} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{ color: grey[100], textTransform: "none", opacity: !navigator ? 1 : 0.35 }}
          onClick={() => toggleNavigator(false)}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Following
          </Typography>
        </Button>
        <Button
          sx={{ color: grey[100], textTransform: "none", opacity: navigator ? 1 : 0.35 }}
          onClick={() => toggleNavigator(true)}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            For You
          </Typography>
        </Button>
      </Box>
      <IconButton>
        <SearchIcon sx={{ color: grey[100] }} fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Navbar;
