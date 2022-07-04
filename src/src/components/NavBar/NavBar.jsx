import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { SketchOutlined } from "@ant-design/icons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Container from "@mui/material/Container";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import { cartContext } from "../../../contexts/cartContext";

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
  const navigate = useNavigate();
  const { getCart, count } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);

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
                  <a href="/cars">
                    <li>View All Cars</li>
                  </a>
                  <a href="/add">
                    <li>Add a Car</li>
                  </a>
                  <a href="/about">
                    <li>About Us</li>
                  </a>
                  <a href="#">
                    <li>Contact Us</li>
                  </a>
                </ul>
              </div>
            </nav>
            <SketchOutlined
              onClick={() => navigate("/")}
              style={{
                fontSize: "22px",
                paddingLeft: "22px",
                color: "white",
                // marginRight: "60px",
              }}
            />
            <Box>
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
