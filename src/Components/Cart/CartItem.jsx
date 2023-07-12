import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = ` Rs. ${props.item.price?.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.item.qty}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
