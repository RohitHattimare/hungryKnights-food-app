import { useState } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Menu/Meals";
import Cart from "./Components/Cart/Cart";
import CardProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCarthandler = () => { setCartIsShown(true) }
  const hideCarthandler = () => { setCartIsShown(false) };


  return (
    <CardProvider>
      {cartIsShown && <Cart onHideCart={hideCarthandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;