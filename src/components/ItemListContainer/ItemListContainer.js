import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { allProducts } from '../../helpers/allProducts';
import Loader from '../Loader/Loader';


const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const res = await allProducts();
            setItems(res);
        } catch (err) {
            console.log("Error al cargar los productos: ", err);
        }
    };

    return (
        <>
            {greeting}
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {items.length === 0 ? (
                    <Loader loading />
                ) : (
                    <ItemList allProducts={items} />
                )}
            </div>
        </>
    );
};

export default ItemListContainer;