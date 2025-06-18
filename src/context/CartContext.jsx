// src/context/CartContext.jsx

import React, { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Create provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}
