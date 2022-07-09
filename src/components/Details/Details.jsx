import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { carsContext } from "../../contexts/cars.Context";
import Loader from "../Loader/Loader";
import SendIcon from "@mui/icons-material/Send";

const Details = () => {
  const { id } = useParams();
  const { oneCar, getOneCar } = useContext(carsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getOneCar(id);
  }, []);

  function handleBack() {
    navigate("/all-cars");
  }

  return oneCar ? (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "50vh",
        width: "60vw",
        backgroundColor: "white",
        borderRadius: "10px",
      }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" marginTop="20px">
          {oneCar.title}
        </Typography>
        <Typography variant="h6" marginTop="20px">
          {oneCar.description}
        </Typography>
        <Typography variant="h5" marginTop="20px">
          Price: {oneCar.price} €
        </Typography>
        <img
          src={oneCar.image}
          style={{ borderRadius: "20px", marginTop: "20px" }}
          width="600px"
          alt="car"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}>
        <Button
          onClick={handleBack}
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}>
          Back
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Details;
