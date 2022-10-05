import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    inputcolor: {
      border: "#C7D0E8",
      text: "#333D66",
    },
    primary: {
      main: "#D34B29",
      contrastText: "white",
    },
    secondary: {
      main: "#2DCC70",
      contrastText: "white",
    },
    error: {
      main: "#FF3F69",
      light: "#f9dce2",
      contrastText: "white",
    },
    neutral: {
      main: "#a1aab6",
      light: "#d1dae6",
      contrastText: "white",
    },
  },
});
