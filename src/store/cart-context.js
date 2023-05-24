import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  toAddItem: (item) => {},
  toRemoveItem: (id) => {},
  clearCartHandler: () => {},
});

export default CartContext;
