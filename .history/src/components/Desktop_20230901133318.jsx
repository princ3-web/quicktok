import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { grey, purple, lightBlue } from "@mui/material/colors";
import image from "../assets/images/1.png";

const Desktop = () => {
  const items = [
    "📹 Seamless Video Creation: Quick Tok offers effortless video editing, so you can shoot, trim, and add fun filters and effects with ease.",
    "📈 Trending Challenges and Hashtags: Stay up-to-date with the latest challenges and #hashtags to join the viral excitement.",
    "👥 Interactive Duets and Collaborations: Create lively duets and collaborate with fellow content creators, building a sense of community.",
    "🧐 Personalized For You Page: Enjoy a tailored For You Page that delivers content matching your interests and preferences.",
    "💰 In-App Monetization: Turn your passion into profit by earning through ad revenue, brand partnerships, and virtual gifts from your fans.",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
          width: "40%",
          pl: "10%"
        }}
      >
        <Typography
          color={lightBlue[500]}
          variant="h2"
          sx={{ fontWeight: 600, textTransform: "uppercase" }}
        >
          Quick Tok
        </Typography>
        <Typography
          color={grey[300]}
          variant="h5"
          sx={{ fontWeight: 600, textTransform: "uppercase" }}
        >
          tik tok style app
        </Typography>
        <Typography
          color={grey[300]}
          variant="subtitle2"
          sx={{  textTransform: "uppercase", mb: "25px" }}
        >
          Open  on Android or iOS
        </Typography>
        <Box sx={{ width: "85%" }}>
          {items.map((item) => (
            <Typography color={grey[500]} sx={{ mb: "15px" }} variant="subtitle2">
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "45%",
          pr: "15%",
          backgroundColor: lightBlue[900] + 99,
        }}
      >
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
