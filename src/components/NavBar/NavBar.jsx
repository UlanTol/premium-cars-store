import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { SketchOutlined } from "@ant-design/icons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { getCart, count } = React.useContext(cartContext);

  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className="navbar" id="navbar">
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100vw",
            }}>
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
                        navigate("/all-cars");
                      }}>
                      Shop
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
                  <a href="/login">
                    <li>Profile</li>
                  </a>
                  <Link to="/all-cars">
                    <li>Vehicles</li>
                  </Link>
                  <Link to="/add">
                    <li>Add a Car</li>
                  </Link>
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/address">
                    <li>Address</li>
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
              }}
            />
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                onClick={() => navigate("/cart")}
                color="success"
                aria-label="add to shopping cart">
                <Badge badgeContent={count} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}
