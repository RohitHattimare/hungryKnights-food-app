import CartContext from '../../store/card-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import React, { useContext } from 'react'
import CartItem from './CartItem';
import Checkout from './Checkout/Checkout';

function Cart(props) {
  const [onCheckout, setOnCheckout] = React.useState(false);
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
    fetch('https://hungryknights-01-default-rtdb.asia-southeast1.firebasedatabase.app/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: items,
      })
    })
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


  return (
    <Modal onClick={props.onHideCart}>
      {items?.length > 0 && List()}
      <div className={classes['total']} >
        <span> Total Price</span>
        <span>{` Rs. ${totalAmt}`}</span>
      </div>
      {onCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />}
      {!onCheckout && actionButtons}
    </Modal>

  )
}
export default Cart;