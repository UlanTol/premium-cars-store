import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { carsContext } from "../../contexts/cars.Context";
import Loader from "../Loader/Loader";

const EditCar = () => {
  const { getOneCar, oneCar, updateCarInfo } = useContext(carsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneCar(id);
  }, []);
  useEffect(() => {
    if (oneCar) {
      setTitle(oneCar.title);
      setDescription(oneCar.description);
      setPrice(oneCar.price);
      setImage(oneCar.image);
    }
  }, [oneCar]);

  function handleSave() {
    const updatedCar = {
      title,
      price,
      description,
      image,
    };
    updateCarInfo(id, updatedCar);
    navigate("/all-cars");
  }

  return oneCar ? (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography variant="h4">Update a Car Info</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          type="number"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button onClick={handleSave} variant="contained" color="secondary">
          Save
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditCar;
