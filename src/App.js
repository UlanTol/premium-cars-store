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
import Auth0ProviderWithHistory from "./contexts/auth0Provider";
import SMS from "./components/SMS/SMS";
import CommentsContextProvider from "./contexts/commentsContext";

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
    }, 2000);
  });
  return (
    <CommentsContextProvider>
      <CartContextProvider>
        <CarsContextProvider>
          <BrowserRouter>
            <Auth0ProviderWithHistory>
              <ThemeProvider theme={darkTheme}>
                <Navbar />
                <SMS />
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
                      // width=""
                      color="white"
                      ariaLabel="loading"
                    />
                  </Box>
                ) : (
                  <Routing />
                )}
              </ThemeProvider>
            </Auth0ProviderWithHistory>
          </BrowserRouter>
        </CarsContextProvider>
      </CartContextProvider>
    </CommentsContextProvider>
  );
};

export default App;
