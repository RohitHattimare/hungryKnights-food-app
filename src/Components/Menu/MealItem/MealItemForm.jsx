import React, { useRef, useState } from 'react';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const qtyInputRef = useRef();
    const [qtyIsValid, setQtyIsValid] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredQty = qtyInputRef.current.value;
        const enteredQtyNumber = +enteredQty;
        if (enteredQty.trim().length === 0 || enteredQtyNumber < 1 || enteredQtyNumber > 8) {
            setQtyIsValid(false);
        } else
            // setQtyIsValid(true); //TO let warning go away
            props.onAddToCart(enteredQtyNumber);
    }

    const input = {
        type: 'number',
        id: 'ammount',
        min: '1',
        max: '8',
        step: '1',
        defaultValue: '1'
    };

    return (
        <form className={classes.form}>
            <Input
                ref={qtyInputRef}
                label="Amount"
                input={input}
            />
            <button onClick={submitHandler}>+ Add</button>
            {!qtyIsValid && <p className={!qtyIsValid ? classes.error : null}>Please enter a valid amount (1-8)</p>}
        </form >
    );
}
export default MealItemForm; 