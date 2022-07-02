import React from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  function addToCart(car) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        cars: [],
        totalPrice: 0,
      };
    }
    let newCar = {
      item: car,
      count: 1,
      subPrice: car.price,
    };
    cart.cars.push(newCar);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <cartContext.Provider value={{ addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
