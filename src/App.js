import React from "react";
import Router from "./router/Router";
import { CartProvider } from "./contexts/cartContext/CartContext";
import { WishListProvider } from "./contexts/wishListContext/WishListContext";
import { UserProvider } from "./contexts/userContext/UserContext";
// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <WishListProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </WishListProvider>
    </UserProvider>
  );
}

export default App;
