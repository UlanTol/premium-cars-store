import { Container } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = event => {
    console.log(`
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Address: ${address}
      City: ${city}
      Country: ${country}
      `);
    event.preventDefault();
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}>
        <h1>Your Order Form</h1>
        <div style={{ marginTop: "10px" }}>
          <label>
            Full Name:
            <input
              name="name"
              type="name"
              value={name}
              onChange={event => setName(event.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            Phone:
            <input
              name="phone"
              type="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
              style={{ marginLeft: "37px" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            E-Mail:
            <input
              name="email"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              style={{ marginLeft: "37px" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            Address:
            <input
              name="address"
              type="address"
              value={address}
              onChange={event => setAddress(event.target.value)}
              style={{ marginLeft: "24px" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            City:
            <input
              name="city"
              type="city"
              value={city}
              onChange={event => setCity(event.target.value)}
              style={{ marginLeft: "55px" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            Country:
            <input
              name="country"
              type="country"
              value={country}
              onChange={event => setCountry(event.target.value)}
              style={{ marginLeft: "25px" }}
            />
          </label>
        </div>

        <button
          style={{ marginTop: "20px" }}
          onClick={() => navigate("/payment")}>
          Submit
        </button>
      </div>
    </Container>
  );
};

export default OrderForm;
