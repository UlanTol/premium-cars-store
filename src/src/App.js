import React from "react";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Routing from "./Routing";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Routing />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
