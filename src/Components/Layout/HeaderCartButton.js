import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css';

import {AiOutlineShoppingCart} from 'react-icons/ai'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // const {items} = cartCtx;
  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0)
  
  return (
    <button onClick={props.onClick} className={classes.button}>
        <span className={classes.badge}>{numOfCartItems}</span>
        <AiOutlineShoppingCart className={classes.icon}/>
    </button>
  )
}

export default HeaderCartButton