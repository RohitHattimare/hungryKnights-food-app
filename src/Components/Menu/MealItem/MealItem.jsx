import React, { useContext } from 'react'
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/card-context';


const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const { name, description: descr, price } = props.meals;
    //Add
    const addToCartHandle = (qty) => {
        cartCtx.addItem({
            id: props.meals.id,
            name: name,
            description: descr,
            price: price,
            qty: qty
        })
    }

    return (
        <li className={classes.meal} >
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{descr}</div>
                <div className={classes.price}>{`$${price} `}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandle} />
            </div>
        </li >
    );
}

export default MealItem;    