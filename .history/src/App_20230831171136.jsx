import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useMediaQuery } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import { createTheme, ThemeProvider, Box } from "@mui/material";

function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const theme = createTheme({
    palette: {
      customGrey: {
        500: "#155366",
        600: "#0c333f",
        700: "#0e2d33",
        800: "#141e1f",
        900: "#111a19",
      },
    },
    typography: {
      subtitle3: {
        fontSize: "0.85rem",
        fontWeight: 600,
      },
      tiny: {
        fontSize: "0.65rem",
        fontWeight: 600,
      },
    },
  
  });

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
        </Routes>
        <Bottombar />
      </ThemeProvider>
    </Box>
  );
}

export default App;
