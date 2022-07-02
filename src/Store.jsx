import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CarsContextProvider from "./contexts/cars.Context";
import CartContextProvider from "./contexts/cartContext";
import Routing from "./Routing";

const Store = () => {
  return (
    <CartContextProvider>
      <CarsContextProvider>
        <BrowserRouter>
          {/* <ThemeProvider theme={darkTheme}> */}
          <Header />
          <Routing />
          {/* </ThemeProvider> */}
        </BrowserRouter>
      </CarsContextProvider>
    </CartContextProvider>
  );
};

export default Store;
