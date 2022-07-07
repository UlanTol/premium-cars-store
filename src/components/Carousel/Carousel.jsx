import "antd/dist/antd.css";
import { Button, Carousel } from "antd";

import React from "react";
import Section from "../Section/Section";
import Section1 from "../Section/Section1";
import Section2 from "../Section/Section2";
import InnerPage from "../InnerPage/InnerPage";

const Carousel1 = () => {
  const contentStyle = {
    height: "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel autoplay dotPosition="top">
        <div>
          <h2 style={contentStyle}>
            <Section />
          </h2>
        </div>
        <div>
          <h3 style={contentStyle}>
            <InnerPage />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Section2 />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Section1 />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};
export default Carousel1;
