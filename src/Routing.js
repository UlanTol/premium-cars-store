import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar/AddCar";
import Details from "./components/Details/Details";
import EditCar from "./components/EditCar/EditCar";
import CarsList from "./components/CarsList/CarsList";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/cars" element={<CarsList />} />
      <Route path="/add" element={<AddCar />} />
      <Route path="/edit/:id" element={<EditCar />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
