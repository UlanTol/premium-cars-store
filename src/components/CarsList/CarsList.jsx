import {
  Box,
  Container,
  createTheme,
  Pagination,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { carsContext } from "../../contexts/cars.Context";
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

  let theme = createTheme({
    palette: {
      // primary: {
      //   main: "white",
      // },
      secondary: {
        main: "#edf2ff",
      },
    },
  });

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
    </Container>
    // {/* </ThemeProvider> */}
  );
};

export default CarsList;
