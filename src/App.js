import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CarsContextProvider from "./contexts/cars.Context";
import CartContextProvider from "./contexts/cartContext";
import Routing from "./Routing";

const App = () => {
  return (
    <CartContextProvider>
      <CarsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </CarsContextProvider>
    </CartContextProvider>
  );
};

export default App;
