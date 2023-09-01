import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import image from "../assets/images/1.png";

const Desktop = () => {
  const items = [
    "📹 Seamless Video Creation: Quick Tok offers effortless video editing, so you can 🎬 shoot, trim, and add fun filters and effects with ease. 😄",
    "📈 Trending Challenges and Hashtags: Stay up-to-date with the latest 🔥 challenges and #hashtags to join the viral excitement. 🤩",
    "👥 Interactive Duets and Collaborations: Create lively duets and 🤝 collaborate with fellow content creators, building a sense of community. 🥰",
    "🧐 Personalized For You Page: Enjoy a tailored For You Page 🧡 that delivers content matching your interests and preferences. 😊",
    "💰 In-App Monetization: Turn your passion into profit by earning 💵 through ad revenue, brand partnerships, and virtual gifts from your fans. 😎",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
        px: "200px",
        width: "100vw",
        height: "100vh",
        backgroundColor: grey[900],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
        }}
      >
        <Typography
          color={purple[300]}
          variant="h2"
          sx={{ fontWeight: 600, textTransform: "uppercase" }}
        >
          Quick Tok
        </Typography>
        <Typography
          color={grey[300]}
          variant="h5"
          sx={{ fontWeight: 600, textTransform: "uppercase", mb }}
        >
          tik tok style app
        </Typography>
        {items.map((item) => (
          <Typography color={grey[500]} sx={{mb: "5px"}}>{item}</Typography>
        ))}
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
            borderRadius: "15px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default Desktop;
