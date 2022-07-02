import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { carsContext } from "../../contexts/cars.Context";
import Loader from "../Loader/Loader";

const Details = () => {
  const { id } = useParams();
  const { oneCar, getOneCar } = useContext(carsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getOneCar(id);
  }, []);

  function handleBack() {
    navigate("/cars");
  }

  return oneCar ? (
    <Container
      sx={{
        // display: "flex",
        // flexWrap: "wrap",
        flexDirection: "column",
        // alignItems: "center",
      }}>
      <Box>
        <Typography variant="h4" marginTop="20px">
          {oneCar.title}
        </Typography>
        <Typography variant="h6" marginTop="20px">
          {oneCar.description}
        </Typography>
        <Typography variant="h5" marginTop="20px">
          Price: {oneCar.price} €
        </Typography>
        <Box marginTop="20px">
          <img src={oneCar.image} width="50%" alt="car" />
        </Box>
      </Box>
      <Box marginTop="30px">
        <Button onClick={handleBack} variant="contained" color="secondary">
          Back
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Details;
