import "antd/dist/antd.css";

import React from "react";
import Section from "../Section/Section";
import Section1 from "../Section/Section1";
import Section2 from "../Section/Section2";
import Footer from "../Footer/Footer";

import InnerPage from "../InnerPage/InnerPage";

import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

const Carousel1 = () => {
  return (
    <>
      <Fullpage className="full-pages">
        <FullPageSections className="full-pages" style={{ marginTop: "50px" }}>
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
          <FullpageSection
            style={{
              height: "100vh",
              padding: "0",
            }}>
            <Footer />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default Carousel1;
