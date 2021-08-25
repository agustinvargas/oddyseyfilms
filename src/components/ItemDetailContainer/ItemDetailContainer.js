import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import { allProducts } from '../../helpers/allProducts';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    const { itemId } = useParams();
    console.log(itemId);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await allProducts()
                const product = res.find(el => el.id === parseInt(itemId))
                product ? setItems(product) : alert("No existe ningún producto con el parámetro indicado en la URL")
            } catch (err) {
                console.log("Error al cargar los productos: ", err);
            }
        };
        getAllProducts()
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
