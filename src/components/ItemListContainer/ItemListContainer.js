import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { monkAsync } from '../../helpers/monkAsync';
import "./ItemListContainer.scss"

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getMonkAsync();
    }, []);

    const getMonkAsync = async () => {
        try {
            const response = await monkAsync();
            setItems(response);
        } catch (error) {
            console.log("Error al cargar los productos: ", error);
        }
    };

    return (
        <div>
            {greeting}
            <div className="listContainerWrapper">
                <ItemList items={items} />
            </div>
        </div>
    );
};

export default ItemListContainer;