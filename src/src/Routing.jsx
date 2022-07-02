import React from "react";
import { Route, Routes } from "react-router-dom";
import Carousel1 from "./components/Carousel/Carousel";
import InnerPage from "./components/InnerPage/InnerPage";
import Store from "./components/Store/Store";

const URouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* <InnerPage /> */}
            <Carousel1 />
          </>
        }
      />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
};

export default URouting;
