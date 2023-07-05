import CartContext from '../../store/card-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import React, { useContext } from 'react'
import CartItem from './CartItem';

function Cart(props) {

  const { items, totalAmount } = useContext(CartContext);
  const hasItems = items.length > 0;
  let totalAmt = +totalAmount.toFixed(2);

  //Cart Item Button Handles to add & remove items
  const addItemCartHandler = (item) => {
    //check for current quantity and add to that items quantity

  }
  const removeItemCartHandler = (item) => {
    //check for current quantity and remove 1 qty from it 

  }

  //Cart Item List
  const List = () => (<ul className={classes['cart-items']}>
    {items.map(item =>
      // <li key={item.id}>{item.name}</li>
      <CartItem
        key={item.id}
        item={item}
        onAdd={addItemCartHandler.bind(null, item.id)}
        onRemove={removeItemCartHandler.bind(null, item)}
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

  );
}

export default Cart;




























// import classes from './CartItem.module.css';

// const CartItem = (props) => {
//   const price = `$${props.price.toFixed(2)}`;

//   return (
//     <li className={classes['cart-item']}>
//       <div>
//         <h2>{props.name}</h2>
//         <div className={classes.summary}>
//           <span className={classes.price}>{price}</span>
//           <span className={classes.amount}>x {props.amount}</span>
//         </div>
//       </div>
//       <div className={classes.actions}>
//         <button onClick={props.onRemove}>−</button>
//         <button onClick={props.onAdd}>+</button>
//       </div>
//     </li>
//   );
// };

// export default CartItem;
