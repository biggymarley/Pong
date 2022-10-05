import { Box } from "@mui/material";
import React, { useEffect } from "react";
import ping from "../../../assets/imgs/ping.png";
import pong from "../../../assets/imgs/pong.png";
export default function TenisTable() {
  const ParalexEffect = (event) => {
    const elements = document.querySelectorAll(".paralex");
    elements.forEach((element) => {
      const speed = element.getAttribute("data-speed");
      const x = (window.innerWidth - event.pageX * speed) / 500;
      const y = (window.innerHeight - event.pageY * speed) / 500;
      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", ParalexEffect);
    return () => document.removeEventListener("mousemove", ParalexEffect);
  }, []);

  return (
    <Box sx={classes.pongTable} className="paralex" data-speed={2}>
      <Box sx={classes.lineH} />
      <Box sx={classes.lineV} />
      <img
        src={ping}
        style={classes.ping}
        className="paralex"
        data-speed={-16}
        alt=""
      />
      <img
        src={pong}
        style={classes.pong}
        className="paralex"
        data-speed={9}
        alt=""
      />
      <Box sx={classes.ball} className="paralex" data-speed={-9} />
    </Box>
  );
}

const classes = {
  ball: {
    boxShadow: "-2vw 2vw 0vw #0000004a",
    width: "1.7vw",
    height: "1.7vw",
    borderRadius: "50%",
    backgroundColor: "#fff",
    position: "absolute",
    top: "30%",
    right: "40%",
  },
  ping: {
    width: "8vw",
    position: "absolute",
    left: "2vw",
    bottom: "2vw",
    objectFit: "contain",
  },
  pong: {
    width: "8vw",
    objectFit: "contain",
    position: "absolute",
    right: "2vw",
    top: "2vw",
  },

  pongTable: {
    width: "60vw",
    borderRadius: "12px",
    height: "calc(60vw / 2)",
    backgroundColor: "#2DCC70",
    border: "1vw solid #fff",
    display: "flex",
    alignItems: "center",
    position: "relative",
    // boxShadow: "rgba(0, 0, 0, 0.5) 1vw 1vw 1vw",
    // marginTop: "15vh",
  },
  lineH: {
    width: "100%",
    height: "1vw",
    backgroundColor: "#fff",
    trasform: "translate(-50%, -50%)",
  },
  lineV: {
    width: "1vw",
    height: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    right: "50%",
    left: "50%",
    transform: "translate(-50%, 0%)",
  },
};
