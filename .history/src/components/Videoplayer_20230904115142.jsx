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
import ReactPlayer from 'react-player';


const Videoplayer = () => {
  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const playerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current);
      }
    };
  }, []);

  console.log(autoplay);

  const videos = [
    {
      id: 0,
      title: "LaughGalore",
      subtitle:
        "Get ready to ROFL! This video will have you laughing uncontrollably with the craziest moments. 🤪🤣🤭",
      src: video0,
    },
    {
      id: 1,
      title: "CosmicExplorers",
      subtitle:
        "Blast off with us! Join these adventurers on their out-of-this-world escapades. 🌌👨‍🚀🛸",
      src: video1,
    },
    {
      id: 2,
      title: "EpicFailFrenzy",
      subtitle:
        "Prepare for some epic fails! You won't stop laughing at these hilarious mishaps. 😅🤦‍♂️😹",
      src: video2,
    },
    {
      id: 3,
      title: "SkillMasters",
      subtitle:
        "You won't believe your eyes! Witness jaw-dropping feats by incredibly talented individuals. 🤯🏆👏",
      src: video3,
    },
    {
      id: 4,
      title: "EnchantingWorld",
      subtitle: "Prepare to be enchanted! Immerse yourself in a world of beauty and wonder. ✨🧚‍♀️🌟",
      src: video4,
    },
    {
      id: 5,
      title: "MindBlownCreators",
      subtitle: "Get your mind blown! These creations will leave you in awe and disbelief. 🤩🙌🎨",
      src: video5,
    },
  ];

  return (
    <Box sx={{ position: "absolute", width: "100%", height: "100vh", top: 0 }}>
      <SwipeableViews
        axis="y"
        enableMouseEvents
        index={index}
        onChangeIndex={handleChangeIndex}
        containerStyle={{ height: "92dvh" }}
      >
        {videos.map((item, n) => (
          <Box sx={{ position: "relative", overflowX: "hidden", border: "2px solid red" }} key={n}>
            {/* <CardMedia
              component="video"
              src={item.src}
              sx={{ position: "relative", height: "92dvh", width: "100%", objectFit: "cover" }}
              autoPlay={autoplay}
              loop
              muted // Add this line
              ref={ref}
            /> */}
            {1 && (
              <ReactPlayer
                url={item.src}
                playing={isVisible}
                controls={true}
                width="100%"
                height="100%"
                a
              />
            )}
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
