import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsList from "../components/CarsList/CarsList";
import Carousel1 from "./components/Carousel/Carousel";
import Store from "./components/Store/Store";

const URouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
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
