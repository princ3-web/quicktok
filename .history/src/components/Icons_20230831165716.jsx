import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import { grey, red } from "@mui/material/colors";
import SmsIcon from '@mui/icons-material/Sms';
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import userImage from "../assets/icons/user.png";
import { CardMedia } from "@mui/material";

const Icons = () => {
  const data = [
    { icon: <FavoriteIcon sx={{ color: grey[200], fontSize: 35 }} />, count: 135 },
    { icon: <SmsIcon sx={{ color: grey[200], fontSize: 35 }} />, count: 336 },
    { icon: <ShareIcon sx={{ color: grey[200], fontSize: 35 }} />, count: 5782 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <IconButton
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          margin: 0,
          marginBottom: "1.5rem",
        }}
      >
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
        <AddCircleRoundedIcon
          sx={{ position: "absolute", color: red[600], fontSize: 20, bottom: -10 }}
        />
      </IconButton>
      {data.map((item) => (
        <IconButton
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            borderRadius: 0,
            marginBottom: "1rem",
          }}
        >
          {item.icon}
          <Typography sx={{ color: grey[200] }} variant="subtitle3">
            {item.count}
          </Typography>
        </IconButton>
      ))}
    </Box>
  );
};

export default Icons;
