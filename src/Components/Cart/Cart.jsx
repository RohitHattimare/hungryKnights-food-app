import CartContext from '../../store/card-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import React, { useContext } from 'react'
import CartItem from './CartItem';

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = useContext(CartContext);
  const hasItems = items.length > 0;
  let totalAmt = +totalAmount?.toFixed(2)

  //Cart Item Button Handles to add & remove items
  const addItemCartHandler = (item) => {
    console.log(item)
    cartCtx.addItem({ ...item, qty: 1 })
    // cartCtx.addItem(item)
  }

  const removeItemCartHandler = (item) => {
    //check for current quantity and remove 1 qty from it 
  }

  //Cart Item List
  const List = () => (<ul className={classes['cart-items']}>
    {items.map(item =>
      <CartItem
        key={item.id}
        item={item}
        onAdd={addItemCartHandler.bind(null, item)}
        onRemove={removeItemCartHandler.bind(null, item.id)}
      />
    )}
  </ul>);


  return (
    <Modal onClick={props.onHideCart}>
      {items.length > 0 && List()}
      <div className={classes['total']} >
        <span> Total Price</span>
        <span>{` $${totalAmt}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>

  )
}
export default Cart;