import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { carsContext } from "../../contexts/cars.Context";
import { TextField } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// const pages = ["All Cars", "Add a Car"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const { getCars } = useContext(carsContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color={"secondary"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/cars")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <img
              src="https://www.areaonline.in/uploads/listing/ae609bbcb17839d8a3be3898bfc975d3.jpg"
              width="160px"
              height="120px"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(
                    location.pathname === "/cars"
                      ? `/cars${window.location.search}`
                      : "/cars"
                  );
                }}>
                <Typography textAlign="center">All Cars</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/add");
                }}>
                <Typography textAlign="center">Add a Car</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <img
              src="https://www.areaonline.in/uploads/listing/ae609bbcb17839d8a3be3898bfc975d3.jpg"
              width="130px"
              height="110px"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/about");
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                marginLeft: "20px",
              }}>
              About US
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate(
                  location.pathname === "/cars"
                    ? `/cars${window.location.search}`
                    : "/cars"
                );
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                marginLeft: "20px",
              }}>
              Vehicles
            </Button>

            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/add");
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                marginLeft: "20px",
                marginRight: "30px",
              }}>
              Add a Car
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                marginRight: "30px",
              }}>
              CONTACTS
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ marginRight: "40px" }}
              onClick={() => navigate("/cart")}
              color="warning"
              aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Ruslan Mi"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdiRmavHEzr4LVKm3Zc2ZXZDV6aVzeVZC15R5I8u_FC8GhB9IqtGWwGuq1UqP5_sKLgY&usqp=CAU"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
