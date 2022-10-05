import { Box } from "@mui/system";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import slideUpLottie from "../../../assets/animations/slideUp.json";
import { HomeContext } from "../../contexts/contexts";
import useSlideUpHook from "../../hooks/useSlideUpHook";
import LoginButton from "./LoginButton";
import TenisTable from "./TenisTable";

export default function Home() {
  const [slideUp, setSlideUp] = useState(false);
  // const [dragging, setDragging] = useState(null);
  const handleOpen = () => {
    setSlideUp(true);
  };
  const handleClose = () => {
    setSlideUp(false);
  };
  const [onMouseDown, onMouseUp] = useSlideUpHook(handleOpen);

  useEffect(() => {
    if (slideUp) return;
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("touchend", onMouseUp);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchstart", onMouseDown);
      document.removeEventListener("touchend", onMouseUp);
    };
  }, [slideUp, onMouseDown, onMouseUp]);

  return (
    <HomeContext.Provider value={{ slideUp, handleClose }}>
      <Box sx={classes.homeContainer}>
        <TenisTable />
        <LoginButton />
        {!slideUp ? (
          <Lottie
            onClick={handleOpen}
            animationData={slideUpLottie}
            loop={true}
            autoPlay={true}
            style={classes.slideUp}
          />
        ) : (
          false
        )}
      </Box>
    </HomeContext.Provider>
  );
}

const classes = {
  title: {
    position: "absolute",
    fontFamily: "'Nabla', cursive",
    fontSize: "8vw",
    top: "2vh",
  },
  homeContainer: {
    background: `#D34B29`,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    userSelect: "none",
  },
  slideUp: {
    transform: "rotate(180deg)",
    position: "absolute",
    width: "6vw",
    bottom: "0",
    cursor: "pointer",
    opacity: 0.7,
  },
};
