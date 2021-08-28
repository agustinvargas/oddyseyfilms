import React from "react"
import Router from "./router/Router";
import { CartProvider } from "./contexts/cartContext/CartContext";
// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;
