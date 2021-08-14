import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { allProducts } from '../../helpers/allProducts';
import "./ItemListContainer.scss"

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
        <div>
            {greeting}
            <div className="listContainerWrapper">
                <ItemList allProducts={items} />
            </div>
        </div>
    );
};

export default ItemListContainer;