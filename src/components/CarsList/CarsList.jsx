import { Box, Button, Container } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { carsContext } from "../../contexts/cars.Context";

import Slider from "react-slick";
import CardMeta from "../CardMeta/CardMeta";

const CarsList = () => {
  const navigate = useNavigate();

  const { getCars, cars, pages } = useContext(carsContext);

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
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
          marginTop: "30px",
          justifyContent: "space-evenly",
        }}
        noValidate
        autoComplete="off">
        <Button onClick={() => navigate("/all-cars")}>All Cars</Button>
      </Box>
      <Slider {...settings}>
        <Box style={{ height: "30vh" }}>
          {/* {cars.map(item => ( */}
          <CardMeta />
          {/* key={item.id} item={item}  */}
          {/* ))} */}
        </Box>
      </Slider>
    </Container>
  );
};

export default CarsList;
