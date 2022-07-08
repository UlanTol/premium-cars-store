import { Container } from "@mui/system";
import React from "react";
import Cards from "react-credit-cards";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "react-credit-cards/es/styles-compiled.css";
import { IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";

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
            <IconButton aria-label="fingerprint" color="error">
              <Fingerprint />
            </IconButton>
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
            <IconButton aria-label="fingerprint" color="warning">
              <Fingerprint />
            </IconButton>
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
            <IconButton aria-label="fingerprint" color="secondary">
              <Fingerprint />
            </IconButton>
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
            <IconButton aria-label="fingerprint" color="primary">
              <Fingerprint />
            </IconButton>
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
            <IconButton aria-label="fingerprint" color="error">
              <Fingerprint />
            </IconButton>
            <Button
              href="/thank-you"
              style={{ marginTop: "10px" }}
              variant="contained"
              color="warning"
              endIcon={<SendIcon />}>
              Pay Now
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
