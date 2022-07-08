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
    address: "",
    phone: "",
    email: "",
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, number, value } = e.target;
    if (!value.trim("") || !name.trim("")) {
      return alert("Please insert all the required information");
    }
    this.setState({ [name]: value });
    this.setState({ [number]: value });
  };

  render() {
    return (
      <Container>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignContent: "center",
            }}>
            <form>...</form>
            <form style={{ marginTop: "10px" }}>Enter Credit Card number</form>
            <form>
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
            <form>...</form>
            Enter Full Name
            <form>
              <input
                type="name"
                name="name"
                placeholder="Card Holder Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
            <form>...</form>
            Enter CVC Code
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
            Enter Card Expiry date
            <form>
              <input
                type="expiry"
                name="expiry"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
            <form>...</form>
            <Button
              href="/thank-you"
              style={{ marginTop: "10px" }}
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}>
              Proceed with Payment
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
