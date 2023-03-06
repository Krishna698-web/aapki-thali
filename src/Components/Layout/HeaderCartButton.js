import React, { useContext, useState, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css';

import {AiOutlineShoppingCart} from 'react-icons/ai'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false); 


  const {items} = cartCtx;
  const numOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0)
  
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)  
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items])
  

  return (
    <button onClick={props.onClick} className={btnClasses}>
        <span className={classes.badge}>{numOfCartItems}</span>
        <AiOutlineShoppingCart className={classes.icon}/>
    </button>
  )
}

export default HeaderCartButton