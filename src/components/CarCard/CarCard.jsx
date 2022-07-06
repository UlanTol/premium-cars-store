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
import { Rating } from "@mui/material";

export default function CarCard({ item }) {
  const { deleteCar } = React.useContext(carsContext);
  const { addToCart, checkCarInCart } = React.useContext(cartContext);
  const navigate = useNavigate();
  const [carState, setCarState] = React.useState(checkCarInCart(item.id));
  const [like, setLike] = React.useState(false);

  return (
    <Card
      sx={{
        maxWidth: 360,
        margin: "20px",
        flexWrap: "wrap",
        textAlign: "center",
      }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {item.price} €
        </Typography>
      </CardContent>
      <CardMedia component="img" height="140" image={item.image} alt="car" />
      <br />
      <Rating name="simple-controlled" defaultValue={5} />
      <br />
      <div
        style={{
          marginTop: "15px",
        }}>
        {like ? (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="30px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdqZT9u4TbZgOWGu4XGRm3Uw1Z6C9zY5p7g&usqp=CAU"
          />
        ) : (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="30px"
            src="https://i.pinimg.com/474x/a3/6b/be/a36bbeb6573ccb3396ad3c225b5157f9.jpg"
          />
        )}
      </div>

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
        <IconButton
          onClick={() => {
            addToCart(item);
            setCarState(checkCarInCart(item.id));
          }}>
          <AddShoppingCartIcon color={carState ? "secondary" : "warning"} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
