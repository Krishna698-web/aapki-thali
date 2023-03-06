import React, { useContext, useEffect } from 'react'
import CartContext from '../../../store/cart-context'
import MealItemForm from './MealItemForm'

function MealItem(props) {

  const cartCtx = useContext(CartContext);

const price = `$${props.price}`

  const addToCartHandler = (amount) => {
    cartCtx.toAddItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    })
  }

  return (
    <li>
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <span>{price}</span>
        </div>
        <MealItemForm onAddToCart={addToCartHandler}/>
    </li>
  )
}

export default MealItem