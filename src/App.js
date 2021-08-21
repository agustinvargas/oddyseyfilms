import React from "react"
import Router from "./router/Router";
import { CartContext } from "./contexts/cartContext";
// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <CartContext.Provider value={[]}>
      <Router />
    </CartContext.Provider>
  );
}

export default App;
