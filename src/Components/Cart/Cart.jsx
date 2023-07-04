import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
const itemList = [{
  id: 'm1',
  name: 'Sushi',
  description: 'Finest fish and veggies',
  price: 22.99,
},
{
  id: 'm2',
  name: 'Schnitzel',
  description: 'A german specialty!',
  price: 16.5,
}]

function Cart(props) {
  const list = <ul className={classes['cart-item']}>
    {itemList.map(item => <li>{item.name}</li>)}
  </ul>
  console.log("list data", list)

  return (
    <Modal onClick={props.onHideCart}>
      {list}
      <div className={classes['total']} >
        <span> Total Price</span>
        <span>40$</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
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
