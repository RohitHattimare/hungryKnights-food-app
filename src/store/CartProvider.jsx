import CartContext from "./card-context";

function CardProvider(props) {
    const addItemToCart = (item) => { };
    const removeItemFromCart = (id) => { };
    //Static cart Data - demo
    const cartItem = {
        items: [],
        totalAmount: 0,
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