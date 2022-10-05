import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
