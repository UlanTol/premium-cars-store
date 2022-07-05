import { Container } from "@mui/system";
import React from "react";
import Cards from "react-credit-cards";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "react-credit-cards/es/styles-compiled.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    if (!value || !name) {
      return alert("All inputs must be completed");
    }
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form>...</form>
          <form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </form>
          ...
          <form>
            <input
              type="name"
              name="name"
              placeholder="Card Holder Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </form>
          ...
          <form>
            <input
              type="expiry"
              name="expiry"
              placeholder="Expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </form>
          ...
          <form>
            <input
              type="cvc"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </form>
          <form>...</form>
          <Button variant="contained" color="warning" endIcon={<SendIcon />}>
            Make a Payment
          </Button>
        </div>
      </Container>
    );
  }
}
