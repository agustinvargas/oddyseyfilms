import React from "react"
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const calcTotal = () => {
        return cart.reduce(
            (acc, el) => el.item.price * el.quantity + acc,
            0
        )
    }

    const cartNumber = () => cart.reduce((acc, cur) => acc + cur.quantity, 0);

    const clearCart = () => {
        setCart([]);
    };

    const getItem = id => cart.find(e => e.item.id === id);

    const subQuantity = (id, ammount) => {
        if (getItem(id).quantity > ammount) {
            setCart(
                cart.map(e => {
                    if (e.item.id === id) e.quantity -= ammount;
                    return e;
                })
            );
        } else {
            removeFromCart(id);
        }
    };

    const plusQuantity = (id, qua, stock) => {
        if (qua < stock) {
            setCart(
                cart.map(e => {
                    if (e.item.id === id) e.quantity = e.quantity + 1;
                    return e
                })
            );
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(e => e.item.id !== id));
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

    return (
        <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, cartNumber, plusQuantity, subQuantity, removeFromCart, calcTotal }} >
            {children}
        </CartContext.Provider>
    )
}