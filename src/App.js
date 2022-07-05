import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CarsContextProvider from "./contexts/cars.Context";
import CartContextProvider from "./contexts/cartContext";
import Routing from "./Routing";
import Navbar from "./components/NavBar/NavBar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  });
  return (
    <CartContextProvider>
      <CarsContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={darkTheme}>
            <Navbar />
            {loading == true ? (
              <Box
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  marginTop: "30vh",
                  justifyContent: "center",
                }}>
                <Rings
                  height="200"
                  width="200"
                  color="white"
                  ariaLabel="loading"
                />
              </Box>
            ) : (
              <Routing />
            )}
          </ThemeProvider>
        </BrowserRouter>
      </CarsContextProvider>
    </CartContextProvider>
  );
};

export default App;
