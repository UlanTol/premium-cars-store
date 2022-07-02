import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CarsContextProvider from "./contexts/cars.Context";
import CartContextProvider from "./contexts/cartContext";
import Routing from "./Routing";
import URouting from "./src/Routing";
import Navbar from "../src/src/components/NavBar/NavBar";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <CartContextProvider>
      <CarsContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={darkTheme}>
            <Navbar />
            <URouting />
            {/* <Header /> */}
            <Routing />
          </ThemeProvider>
        </BrowserRouter>
      </CarsContextProvider>
    </CartContextProvider>
  );
};

export default App;
