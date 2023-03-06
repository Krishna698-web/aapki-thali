import React, { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css';

const Cart = (props) => {
    const [orderPlaced, setOrderPlaced] = useState(false);
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

    const orderPlacedHandler = () => {
        setOrderPlaced(true);
    }

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.cartSection}>
                <div className={classes.total}>
                    <h3>Total Amount</h3>
                    <span className={classes.totalBill}>{totalAmount}</span>
                </div>
                <div className={classes.cartButtons}>
                    <Button onClick={props.onClose}>Close</Button>
                    {hasItems && <Button onClick={orderPlacedHandler}>Order</Button>}
                </div>
            </div>
            {orderPlaced && <p className={classes.msg}>Thank you for ordering, enjoy your meal😋😋. <br />
                Have a good day..</p>}
        </Modal>
    )
}

export default Cart