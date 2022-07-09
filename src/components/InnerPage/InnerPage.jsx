import React from "react";
import "../InnerPage/Style.css";
import { Button } from "antd";
import "antd/dist/antd.css";

import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const InnerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main1" style={{ width: "100vw", height: "100vh" }}>
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
            color: "black",
            marginTop: "35px",
          }}>
          Ferrari GTC4
        </Title>
        <Title
          style={{
            marginTop: "0",
            fontSize: "3em",
            marginBottom: "5px",
            fontFamily: "sans-serif",
            color: "black",
          }}>
          Speed. Power. Energy.
        </Title>
        <div
          style={{ display: "flex", marginTop: "10px" }}
          className="site-button-ghost-wrapper">
          <Button
            style={{ height: "30px", color: "black" }}
            onClick={() => navigate("/cars")}
            type="link"
            ghost>
            See More...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
