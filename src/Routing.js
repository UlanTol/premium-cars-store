import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar/AddCar";
import Details from "./components/Details/Details";
import EditCar from "./components/EditCar/EditCar";
import CarsList from "./components/CarsList/CarsList";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import Carousel1 from "./components/Carousel/Carousel";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Carousel1 />} />
      <Route path="/cars" element={<CarsList />} />
      <Route path="/add" element={<AddCar />} />
      <Route path="/edit/:id" element={<EditCar />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Profile />} />
    </Routes>
  );
};

export default Routing;
