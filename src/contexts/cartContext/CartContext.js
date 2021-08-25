import React from "react"
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const cartNumber = () => cart.reduce((acc, cur) => acc + cur.quantity, 0);

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(el => el.id !== id));
    };


    const addToCart = (item, quantity) => {
        const isInCart = id => cart.some(el => el.item.id === id);
        if (isInCart(item.id)) {
            setCart(
                cart.map(el => {
                    if (el.item.id === item.id) el.quantity = el.quantity + quantity;
                    return el;
                }))
        } else {
            setCart([...cart, { item, quantity }]);
        }
    };

    console.log("Cart", cart)

    return (
        <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, removeFromCart, cartNumber }} >
            {children}
        </CartContext.Provider>
    )
}