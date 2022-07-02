import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { carsContext } from "../../contexts/cars.Context";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../contexts/cartContext";

export default function CarCard({ item }) {
  const { deleteCar } = React.useContext(carsContext);
  const { addToCart } = React.useContext(cartContext);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 360,
        margin: "20px",
        flexWrap: "wrap",
        textAlign: "center",
      }}>
      <CardMedia component="img" height="140" image={item.image} alt="car" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {item.price} €
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ color: "red" }}
          onClick={() => deleteCar(item.id)}>
          Delete
        </Button>
        <Button
          size="small"
          sx={{ color: "magenta" }}
          onClick={() => navigate(`/edit/${item.id}`)}>
          Update Car Info
        </Button>
        <Button
          size="small"
          sx={{ color: "lawngreen" }}
          onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </Button>
        <IconButton onClick={() => addToCart(item)}>
          <AddShoppingCartIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}