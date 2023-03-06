import React, {useState} from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";



const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () =>{
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
