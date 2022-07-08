import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { carsContext } from "../../contexts/cars.Context";

const AddCar = () => {
  const { addCar } = useContext(carsContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newCar = {
      title,
      price,
      description,
      image,
    };
    if (!title.trim("") || !description.trim("") || !image.trim("") || !price) {
      alert("Please complete all inputs!");
    } else {
      addCar(newCar);
      navigate("/cars");
    }
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography variant="h4">Add a Car</Typography>
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
          label="Price, €"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
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
        <Button onClick={handleSave} variant="contained" color="warning">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddCar;
