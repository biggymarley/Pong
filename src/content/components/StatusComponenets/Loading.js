import { Backdrop } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import loadingJson from "../../../assets/animations/lodaing.json";
export default function Loading({ loading }) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#1E1C1C",
      }}
      open={loading}
    >
      <Lottie
        animationData={loadingJson}
        loop={true}
        autoplay={true}
        style={{ transform: "scale(.5)" }}
      />
    </Backdrop>
  );
}
