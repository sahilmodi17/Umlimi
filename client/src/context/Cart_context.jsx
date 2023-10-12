import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/Cart_reducer";
import axios from "axios";
import cartData from "../../cartData";

const url = "https://course-api.com/react-useReducer-cart-project";
const CartContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartData,
  total: 0,
  qty: 1,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(url);
      const cart = response.data;
      dispatch({ type: "DISPLAY_ITEMS", payload: cart });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };
  const addToCart = (item) => {
    console.log("cart context ma addtoCart", item);
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  useEffect(() => {
    // fetchData()
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
