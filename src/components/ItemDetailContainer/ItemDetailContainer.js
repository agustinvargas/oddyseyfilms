import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
// import { allProducts } from '../../helpers/allProducts';
import Loader from '../Loader/Loader';
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    let { itemId } = useParams();
    console.log(itemId);

    useEffect(() => {
        const getItem = () => {
            const firebaseProducts = [];
            getFirestore().collection("items").onSnapshot((querySnapshot) => {
                querySnapshot.forEach((item) => {
                    firebaseProducts.push({ ...item.data(), id: item.id });
                });
                const item = firebaseProducts.find(el => el.id === itemId)
                item ? setItems(item) : alert("No existe ningún producto con el parámetro indicado en la URL")
            });
        };
        getItem()
    }, [itemId]);

    console.log(item);

    return (
        <>
            {item.length === 0 ? (
                <Loader loading />
            ) : (
                <ItemDetail item={item} />
            )}
        </>
    );
};

export default ItemDetailContainer;
