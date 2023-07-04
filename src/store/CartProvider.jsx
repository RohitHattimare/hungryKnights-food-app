import { useReducer } from 'react';
import CartContext from "./card-context";
//Initial State and reducer defined outsde because itshould not be rendered on data change
const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.qty;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState; //returning the default state
}

function CardProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCart = (item) => {
        //check if item is already in the cart
        //if yes, increase the quantity
        dispatchCartAction({ type: 'ADD', item: item })
        //if no, add the item to the cart
    }
    const removeItemFromCart = (id) => {
        //Remove Items from the Cart
        dispatchCartAction({ type: 'REMOVE', id: id });
    }

    //Static cart Data - demo
    const cartItem = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };
    return (
        <CartContext.Provider value={cartItem}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CardProvider