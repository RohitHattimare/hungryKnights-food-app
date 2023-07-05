import { useReducer } from 'react';
import CartContext from "./card-context";
//Initial State and reducer defined outsde because itshould not be rendered on data change
const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.qty;

        //check if item is already in the cart
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItem;
        let updatedItems;
        //Check if itemis already is in the cart if found update that item with data from action
        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                qty: existingCartItem.qty + action.item.qty
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            //For new item that is not in the cart
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

function CardProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCart = (item) => {

        //if yes, increase the quantity

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