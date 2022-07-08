import {
  Box,
  Container,
  Pagination,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { carsContext } from "../../contexts/cars.Context";
import CarCard from "../CarCard/CarCard";

const AllCarsList = () => {
  const { getCars, cars, pages } = useContext(carsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  const [price, setPrice] = useState([1, 10000000]);

  useEffect(() => {
    getCars();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 6,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getCars();
  }, [searchParams]);

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        noValidate
        autoComplete="off">
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
            getAriaLabel={() => "Temperature range"}
            color="warning"
            value={price}
            onChange={(e, value) => {
              setPrice(value);
            }}
            valueLabelDisplay="auto"
            min={0}
            max={10000000}
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
          color="warning"
        />
      </Box>
    </Container>
  );
};

export default AllCarsList;
