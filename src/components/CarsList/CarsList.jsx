import { Box, Button, Container } from "@mui/material";
import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import CardMeta from "../CardMeta/CardMeta";
import Footer from "../Footer/Footer";

const CarsList = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <Container>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}>
        <Typography style={{ color: "gold", fontSize: "50px" }}>
          Premium Cars AG
        </Typography>
        <Typography style={{ color: "white", fontSize: "20px" }}>
          With over 80 years of combined experience, we can make your dreams
          become a reality.
        </Typography>
      </Box>
      <Slider {...settings}>
        <Box>
          <CardMeta />
        </Box>
      </Slider>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
          marginTop: "30px",
          justifyContent: "space-evenly",
        }}
        noValidate
        autoComplete="off">
        <Button
          variant="outlined"
          color="warning"
          onClick={() => navigate("/all-cars")}>
          Let's drive to our Shop
        </Button>
      </Box>

      <Footer />
    </Container>
  );
};

export default CarsList;
