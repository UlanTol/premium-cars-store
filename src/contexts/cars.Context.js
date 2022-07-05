import React, { useReducer } from "react";
import axios from "axios";

export const carsContext = React.createContext();

const INIT_STATE = {
  cars: [],
  oneCar: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...state,
        cars: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 2),
      };
    case "GET_ONE":
      return { ...state, oneCar: action.payload };
    default:
      return state;
  }
}

const CARS_API = "http://localhost:8005/cars";

const CarsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! Create
  async function addCar(newCar) {
    await axios.post(CARS_API, newCar);
  }

  //! Read
  async function getCars() {
    const res = await axios(`${CARS_API}${window.location.search}`);
    dispatch({
      type: "GET_CARS",
      payload: res,
    });
  }

  //! Delete
  async function deleteCar(id) {
    await axios.delete(`${CARS_API}/${id}`);
    getCars();
  }

  //! Details, Get to edit
  async function getOneCar(id) {
    const res = await axios(`${CARS_API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: res.data,
    });
  }

  //! Update
  async function updateCarInfo(id, updatedCar) {
    await axios.patch(`${CARS_API}/${id}`, updatedCar);
  }

  return (
    <carsContext.Provider
      value={{
        cars: state.cars,
        oneCar: state.oneCar,
        pages: state.pages,
        addCar,
        getCars,
        deleteCar,
        getOneCar,
        updateCarInfo,
      }}>
      {children}
    </carsContext.Provider>
  );
};
export default CarsContextProvider;
