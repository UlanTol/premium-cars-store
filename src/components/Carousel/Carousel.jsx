import "antd/dist/antd.css";
import Footer from "../Footer/Footer";

import React from "react";
import Section from "../Section/Section";
import Section1 from "../Section/Section1";
import InnerPage from "../InnerPage/InnerPage";

import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import { Box } from "@mui/material";

const Carousel1 = () => {
  return (
    <>
      <Fullpage>
        <FullPageSections style={{ marginTop: "50px" }}>
          <FullpageSection
            style={{
              height: "100vh",
              padding: "0",
            }}>
            <InnerPage />
          </FullpageSection>
          <FullpageSection
            style={{
              height: "100vh",
              padding: "0",
            }}>
            <Section1 />
          </FullpageSection>
          <FullpageSection
            style={{
              height: "100vh",
              padding: "0",
            }}>
            <Section />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default Carousel1;
