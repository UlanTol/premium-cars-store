import { Box, Button, Container } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createTheme,
  Pagination,
  // Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { carsContext } from "../../contexts/cars.Context";

import Slider from "react-slick";
import CardMeta from "../CardMeta/CardMeta";
import CarCard from "../CarCard/CarCard";
const CarsList = () => {
  const { getCars, cars, pages } = useContext(carsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  const [price, setPrice] = useState([1, 1000000]);

  // const CarsList = () => {
  const navigate = useNavigate();

  // const { getCars, cars, pages } = useContext(carsContext);

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
        <TextField
          value={search}
          color="secondary"
          onChange={e => setSearch(e.target.value)}
          label="I am Looking for..."
          variant="outlined"
          margin="normal"
        />
        <Box sx={{ marginTop: "40px", justifyContent: "center" }}>
          <Typography>Filter by Price</Typography>
          <Slider
            style={{ color: "secondary" }}
            getAriaLabel={() => "Price range"}
            color="secondary"
            value={price}
            onChange={(e, value) => {
              setPrice(value);
            }}
            valueLabelDisplay="auto"
            min={0}
            max={1000000}
            step={50000}
          />
        </Box>
      </Box>

      <Box marginTop="50px">
        {cars.map(item => (
          <CarCard key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <Pagination
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
          page={currentPage}
          count={pages}
          color="success"
        />
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
