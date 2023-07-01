import { Fragment } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Menu/Meals";


function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment >
  );
}

export default App;