import CartContext from '../../store/card-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import React, { useState, useContext } from 'react'
import CartItem from './CartItem';
import Checkout from './Checkout/Checkout';

function Cart(props) {
  const [onCheckout, setOnCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = useContext(CartContext);
  const hasItems = items?.length > 0;
  let totalAmt = +totalAmount?.toFixed(2)

  //Cart Item Button Handle to add items with 1 qty 
  const addItemCartHandler = (item) => {
    cartCtx.addItem({ ...item, qty: 1 })
  }

  const removeItemCartHandler = (item) => {
    //check for current quantity and remove 1 qty from it 
    cartCtx.removeItem(item)
  }

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true)
    fetch('https://hungryknights-01-default-rtdb.asia-southeast1.firebasedatabase.app/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: items,
      })
    })
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
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

  const actionButtons = (<div className={classes.actions}>
    <button onClick={props.onHideCart} className={classes['button--alt']}>
      Close
    </button>
    {hasItems && (
      <button className={classes.button} onClick={() => setOnCheckout(true)}>
        Order
      </button>)}
  </div>
  )

  const cartModalContent = (<>
    {items?.length > 0 && List()}
    <div className={classes['total']} >
      <span> Total Price</span>
      <span>{` Rs. ${totalAmt}`}</span>
    </div>
    {onCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />}
    {!onCheckout && actionButtons}
  </>)

  const isSubmittingModalContent = (<h6> Submitting Order ... </h6>)
  const didSubmitModalContent = (<>
    <h5>
      Order Submitted Successfully will be Delivered in a while   !!!
    </h5>
    <div className={classes.actions}>
      <button onClick={props.onHideCart} className={classes['button--alt']}>
        Close
      </button>
    </div>
  </>)

  return (
    <Modal onClick={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>

  )
}
export default Cart;