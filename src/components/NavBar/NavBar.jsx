import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { SketchOutlined } from "@ant-design/icons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Container from "@mui/material/Container";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                  {!isLoading && !user && (
                    <li
                      style={{ color: "green" }}
                      onClick={() => {
                        loginWithRedirect();
                        navigate("/cars");
                      }}>
                      Sign In
                    </li>
                  )}
                  {!isLoading && user && (
                    <li
                      style={{ color: "red" }}
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}>
                      Log Out
                    </li>
                  )}
                  {/* </Link> */}
                  <a href="/login">
                    <li>Profile</li>
                  </a>
                  <Link to="/">
                    <li>Main</li>
                  </Link>
                  <Link to="/cars">
                    <li>Cars</li>
                  </Link>
                  <Link to="/about">
                    <li>About Us</li>
                  </Link>
                </ul>
              </div>
            </nav>
            <SketchOutlined
              onClick={() => navigate("/")}
              style={{
                fontSize: "22px",
                paddingLeft: "2px",
                color: "white",
                // marginRight: "60px",
              }}
            />
            <Box>
              <ShoppingCartIcon
                onClick={() => navigate("/cart")}
                style={{ fontSize: "30px" }}
              />
              <Typography
                onClick={() => navigate("/cart")}
                variant="h1"
                component="div"></Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}
