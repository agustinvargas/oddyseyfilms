import React from "react"
import { createContext, useState } from "react";

export const WishListContext = createContext([]);

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);

    const wishListNumber = () => wishList.length;

    const clearWishList = () => {
        setWishList([]);
    };

    const removeFromWishList = (id) => {
        setWishList(wishList.filter(e => e.item.id !== id));
    };


    const addToWishList = (item, quantity) => {
        const isInWishList = id => wishList.some(el => el.item.id === id);
        if (!isInWishList(item.id)) {
            setWishList([...wishList, { item, quantity }]);
        }
    };

    console.log("WishList", wishList)

    return (
        <WishListContext.Provider value={{ wishList, setWishList, wishListNumber, clearWishList, addToWishList, removeFromWishList }} >
            {children}
        </WishListContext.Provider>
    )
}