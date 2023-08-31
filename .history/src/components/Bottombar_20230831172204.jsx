import React, { useState } from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useTheme } from "@mui/material";

const Bottombar = () => {
  const theme = useTheme();

  const [navigator, toggleNavigator] = useState(0);

  const icons = [
    {
      name: "Home",
      icon: <HomeIcon sx={{ color: navigator === 0 ? grey[100] : grey[500], fontSize: "25px" }} />,
    },
    {
      name: "Discover",
      icon: <ExploreIcon sx={{ color: navigator === 1 ? grey[100] : grey[500], fontSize: "25px" }} />,
    },
    { name: "", icon: <AddBoxIcon sx={{ color: grey[100], fontSize: "40px", filter: "drop-shadow(3px 3px 3px violet)" }} /> },
    { name: "Inbox", icon: <InboxIcon sx={{ color: navigator === 3 ? grey[100] : grey[500], fontSize: "25px" }} /> },
    {
      name: "Profile",
      icon: <PersonOutlineIcon sx={{ color: navigator === 4 ? grey[100] : grey[500], fontSize: "25px" }} />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "8vh",
        backgroundColor: theme.palette.customGrey[900],
        boxSizing: "border-box",
        paddingInline: "1rem",
      }}
    >
      {icons.map((item, n) => (
        <IconButton sx={{ textTransform: "none" }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <IconButton
              sx={{ padding: 0, borderRadius: 0 }}
              onClick={() => toggleNavigator(n)}
            >
              {item.icon}
            </IconButton>
            <Typography color={navigator === n ? grey[100] : grey[500]} variant="tiny">
              {item.name}
            </Typography>
          </Box>
        </IconButton>
      ))}
    </Box>
  );
};

export default Bottombar;
