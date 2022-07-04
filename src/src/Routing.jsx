import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsList from "../components/CarsList/CarsList";
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
      <Route path="/cars" element={<CarsList />} />
    </Routes>
  );
};

export default URouting;
