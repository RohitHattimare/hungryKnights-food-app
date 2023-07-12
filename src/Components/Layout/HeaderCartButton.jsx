import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../assets/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/card-context"

const HeaderCartButton = (props) => {
    const { items } = useContext(CartContext);
    const [cartButtonEffect, setCartuttonEffect] = useState(false);
    const numberOfCartItems = items?.reduce(
        (curNumber, item) => {
            return curNumber + item.qty;
        }, 0);
    const btnClasses = `${classes.button} ${cartButtonEffect ? classes.bump : ""}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setCartuttonEffect(true);
        const timer = setTimeout(() => {
            setCartuttonEffect(false);
        }, 900);
        return () => {
            clearTimeout(timer);
        }

    }, [items]);
    return (
        <button onClick={props.onShow} className={btnClasses}>
            <span className={classes.icon}> <CartIcon /></span>
            <span> Your Cart  </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;