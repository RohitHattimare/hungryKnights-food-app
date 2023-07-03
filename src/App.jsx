import { Fragment, useState } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Menu/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCarthandler = () => { setCartIsShown(true) }
  const hideCarthandler = () => { setCartIsShown(false) };


  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCarthandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </Fragment >
  );
}

export default App;