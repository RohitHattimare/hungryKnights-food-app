import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
    const { name, description: descr, price } = props.meals;

    return (
        <li className={classes.meal} >
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{descr}</div>
                <div className={classes.price}>{`$${price} `}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li >
    );
}

export default MealItem;    