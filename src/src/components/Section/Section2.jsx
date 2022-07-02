import React from "react";
import "../Section/Style.css";
import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Section2 = () => {
  const navigate = useNavigate();
  return (
    <div className="main4" style={{ width: "100vw", height: "100vh" }}>
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
            display: "block",
            fontSize: "30px",
            fontWeight: "200",
            fontFamily: "sans-serif",
            color: "white",
            marginTop: "35px",
          }}>
          Mercedes-Bens CLA
        </Title>
        <Title
          style={{
            marginTop: "0",
            fontSize: "3em",
            marginBottom: "5px",
            fontFamily: "sans-serif",
            color: "white",
          }}>
          Magic run with the family.
        </Title>
        <div
          style={{ display: "flex", marginTop: "20px" }}
          className="site-button-ghost-wrapper">
          <Button
            style={{}}
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

export default Section2;
