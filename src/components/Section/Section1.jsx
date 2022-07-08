import React from "react";
import "../Section/Style.css";
import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Section1 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="main3"
      style={{ color: "white", width: "100vw", height: "100%" }}>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Title
          style={{
            // display: "block",
            fontSize: "30px",
            fontWeight: "200",
            fontFamily: "sans-serif",
            color: "white",
            marginTop: "35px",
          }}>
          Mustang Mach1
        </Title>
        <Title
          style={{
            marginTop: "0",
            fontSize: "3em",
            marginBottom: "5px",
            fontFamily: "sans-serif",
            color: "white",
          }}>
          Love the power.Love the price.
        </Title>
        <div
          style={{ display: "flex", marginTop: "10px" }}
          className="site-button-ghost-wrapper">
          <Button
            style={{ color: "white" }}
            onClick={() => navigate("/cars")}
            type="link"
            ghost>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
