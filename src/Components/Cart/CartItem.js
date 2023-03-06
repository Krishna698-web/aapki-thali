import React from 'react'
import classes from './Cart.module.css';


const CartItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;
    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <span className={classes.price}>{price}</span>
                <span className={classes.amount}>x {props.amount}</span>
            </div>
            <div className={classes.buttons}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItem