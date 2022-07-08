import "antd/dist/antd.css";
import { Carousel } from "antd";

import React from "react";
import Section from "../Section/Section";
import Section1 from "../Section/Section1";
import Section2 from "../Section/Section2";
import InnerPage from "../InnerPage/InnerPage";
const Carousel1 = () => {
  const contentStyles = {
    height: "100vh",

    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyles}>
            <InnerPage />
          </h3>
        </div>
        <div>
          <h3 style={contentStyles}>
            <Section1 />
          </h3>
        </div>
        <div>
          <h2 style={contentStyles}>
            <Section />
          </h2>
        </div>
        <div>
          <h3 style={contentStyles}>
            <Section2 />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};
export default Carousel1;
