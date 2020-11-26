import { createContext, useState } from "react";

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const addToCartEvent = (product) => {
    console.log("addToCartEvent:", product);
  };
  return (
    <ShoppingContext.Provider
      value={{
        addToCartEvent,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingContext, ShoppingProvider };
