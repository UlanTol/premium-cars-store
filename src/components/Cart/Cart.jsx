import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import Loader from "../Loader/Loader";
import { Container } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);

  React.useEffect(() => {
    getCart();
  }, []);

  return cart ? (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Car</TableCell>
              <TableCell align="right">Price, €</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Subprice</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.cars.map(row => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.item.title}
                </TableCell>
                <TableCell align="right">{row.item.price}</TableCell>

                <TableCell align="right">
                  <IconButton
                    onClick={() => changeCount(row.count - 1, row.item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  {row.count}
                  <IconButton
                    onClick={() => changeCount(row.count + 1, row.item.id)}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">{row.item.description}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => navigate(`/details/${row.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteFromCart(row.item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box marginTop="10px">
        <Typography variant="h5">Total, €: {cart.totalPrice} </Typography>
      </Box>
      <Box marginTop="40px">
        <Typography variant="h5" marginRight="20px">
          Proceed with your Order Form:
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/order")}
          endIcon={<SendIcon />}
          fontSize="large">
          Checkout
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
}
