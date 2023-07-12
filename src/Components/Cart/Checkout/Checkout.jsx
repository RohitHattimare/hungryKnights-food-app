import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (val) => val.trim() === '';
const isSixLenghtLong = (val) => val.trim().length === 6;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        address: true,
        street: true,
        pinCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const pinCodeInputRef = useRef();
    const addressInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPinCode = pinCodeInputRef.current.value;
        console.log(enteredName, enteredAddress, enteredStreet, enteredPinCode)
        //validity checks for inputs
        const nameisValid = !isEmpty(enteredName);
        const addressisValid = !isEmpty(enteredAddress);
        const streetisValid = !isEmpty(enteredStreet);
        const pincodeisValid = isSixLenghtLong(enteredPinCode);

        setFormInputValidity({
            name: nameisValid,
            address: addressisValid,
            street: streetisValid,
            pinCode: pincodeisValid
        })

        const formIsValid =
            nameisValid &&
            addressisValid &&
            streetisValid &&
            pincodeisValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            street: enteredStreet,
            pinCode: enteredPinCode
        })
    }

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
    const addressControlClasses = `${classes.control} ${formInputValidity.address ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`;
    const pincodeControlClasses = `${classes.control} ${formInputValidity.pinCode ? '' : classes.invalid}`;


    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type="text" name='name' />
                {!formInputValidity.name && <p>Enter a valid Name</p>}
            </div>
            <div
                className={addressControlClasses}>
                <label htmlFor="address">Address</label>
                <input ref={addressInputRef} type="text" name='address' />
                {!formInputValidity.address && <p>Enter a valid Address</p>}
            </div>
            <div
                className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input ref={streetInputRef} type="text" name='street' />
                {!formInputValidity.street && <p>Enter a valid street name</p>}
            </div>
            <div className={pincodeControlClasses}>
                <label htmlFor="pinCode">Pin Code</label>
                <input ref={pinCodeInputRef} type="number" maxLength={6} name='pinCode' />
                {!formInputValidity.pinCode && <p>Enter a valid Pin Code</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit} >Confirm</button>
            </div>
        </form >
    );
}

export default Checkout;