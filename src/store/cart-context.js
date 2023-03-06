import React from "react"

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    toAddItem:(item) => {},
    toRemoveItem: (id) => {}    
})

export default CartContext;