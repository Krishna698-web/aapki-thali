import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.toRemoveItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.toAddItem({ ...item, amount: 1 });
    }

    const cartItems = (
        <ul className={classes.cartItems}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div>
                <Button onClick={props.onClose}>Close</Button>
                {hasItems && <Button>Order</Button>}
            </div>
        </Modal>
    )
}

export default Cart