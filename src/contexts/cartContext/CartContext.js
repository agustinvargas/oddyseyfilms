import React from "react"
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = id => cart.some(el => el.id === id);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const cartMapped = cart.map(el => {
                return { ...el, quantity: el.quantity + quantity };
            });
            setCart(cartMapped);
            console.log("Cart mapeado", cartMapped)
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    console.log("Cart", cart)

    return (
        <CartContext.Provider value={{ cart, setCart, clearCart, addToCart }} >
            {children}
        </CartContext.Provider>
    )
}