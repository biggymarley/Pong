import { ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../assets/Theme";
import StatusComponent from "./components/StatusComponenets/StatusComponent";
import { PlayerContext, StatusContext } from "./contexts/contexts";
import { defaultPlayerData } from "./data/masterData";
import useStatusHook from "./hooks/useStatusHook";
import MainRouter from "./routes/MainRouter";

export default function Main() {
  const [player, setPlayer] = useState(defaultPlayerData);
  const [uiState, dispatch] = useStatusHook();
  useEffect(() => {
    dispatch({ type: "showLoading", payload: false });
    setPlayer(defaultPlayerData);
    //remove this
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <StatusContext.Provider value={{ uiState, dispatch }}>
        <PlayerContext.Provider value={{ player }}>
          <StatusComponent />
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </PlayerContext.Provider>
      </StatusContext.Provider>
    </ThemeProvider>
  );
}
