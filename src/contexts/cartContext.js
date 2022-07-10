import React, { useReducer } from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: null,
  count: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        count: action.payload.cars.length,
      };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! Create
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

    const isCarInCart = cart.cars.some(item => item.item.id === newCar.item.id);

    if (isCarInCart) {
      cart.cars = cart.cars.filter(item => item.item.id !== newCar.item.id);
    } else {
      cart.cars.push(newCar);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  //! Read
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        cars: [],
        totalPrice: 0,
      };
    }
    cart.totalPrice = cart.cars.reduce((prev, curr) => {
      return prev + curr.subPrice;
    }, 0);

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  //! Delete
  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        cars: [],
        totalPrice: 0,
      };
    }
    cart.cars = cart.cars.filter(item => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function changeCount(count, id) {
    if (count <= 0) {
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.cars = cart.cars.map(item => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function checkCarInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        cars: [],
        totalPrice: 0,
      };
    }
    const isCarInCart = cart.cars.some(item => item.item.id === id);
    return isCarInCart;
  }

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        count: state.count,
        addToCart,
        getCart,
        deleteFromCart,
        changeCount,
        checkCarInCart,
      }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
