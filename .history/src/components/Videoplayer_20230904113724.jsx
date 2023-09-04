import React, { useState, useRef, useEffect } from "react";
import { Box, CardMedia } from "@mui/material";
import video0 from "../assets/videos/0.mp4";
import video1 from "../assets/videos/1.mp4";
import video2 from "../assets/videos/2.mp4";
import video3 from "../assets/videos/3.mp4";
import video4 from "../assets/videos/4.mp4";
import video5 from "../assets/videos/5.mp4";
import SwipeableViews from "react-swipeable-views";
import Subtitles from "./Subtitles";
import Icons from "./Icons";
import { useInView } from "react-intersection-observer";

const Videoplayer = () => {
  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });
  const videoRefs = useRef([]);

  React.useEffect(() => {
    if (inView) {
      setAutoplay(true);
    } else {
      // When out of view, stop autoplay and reset videos
      setAutoplay(false);
      videoRefs.current.forEach((videoRef) => {
        videoRef.currentTime = 0;
        videoRef.pause();
      });
    }
  }, [inView]);

  console.log(autoplay);
  console.log(inView);

  const videos = [
    {
      id: 0,
      title: "LaughGalore",
      subtitle:
        "Get ready to ROFL! This video will have you laughing uncontrollably with the craziest moments. 🤪🤣🤭",
      src: video0,
    },
    // Add other video objects here
  ];

  return (
    <Box
      sx={{ position: "absolute", width: "100%", height: "100vh", top: 0 }}
      ref={ref}
    >
      <SwipeableViews
        axis="y"
        enableMouseEvents
        index={index}
        onChangeIndex={handleChangeIndex}
        containerStyle={{ height: "92dvh" }}
      >
        {videos.map((item, n) => (
          <Box
            sx={{ position: "relative", overflowX: "hidden" }}
            key={n}
          >
            <CardMedia
              component="video"
              src={item.src}
              ref={(el) => (videoRefs.current[n] = el)}
              sx={{
                position: "relative",
                height: "92dvh",
                width: "100%",
                objectFit: "cover",
              }}
              autoPlay={autoplay}
              loop
              muted // Add this line
            />
            <Box sx={{ position: "absolute", bottom: "8vh" }}>
              <Subtitles title={item.title} subtitle={item.subtitle} />
            </Box>
            <Box sx={{ position: "absolute", top: "43vh", right: "0.75rem" }}>
              <Icons />
            </Box>
          </Box>
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default Videoplayer;
