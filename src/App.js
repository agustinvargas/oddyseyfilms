import React from "react"
import Router from "./router/Router";
import { CartProvider } from "./contexts/cartContext/CartContext";
import { WishListProvider } from "./contexts/wishListContext/WishListContext";
// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <WishListProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </WishListProvider>

  );
}

export default App;
