import React, { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { productOne } from '../../helpers/productOne';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProductOne();
    }, []);

    const getProductOne = async () => {
        try {
            const res = await productOne();
            setItems(res);
        } catch (err) {
            console.log("Error al cargar los productos: ", err);
        }
    };

    return (
        <ItemDetail items={items} />
    );
};

export default ItemDetailContainer;