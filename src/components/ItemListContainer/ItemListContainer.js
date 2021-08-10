import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss"

const products = [
    {
        id: 0,
        title: "2001 Space Odyssey",
        price: 2800,
        pictureUrl:
            "/img/img-300x300.png",
    },
    {
        id: 1,
        title: "Stalker",
        price: 2600,
        pictureUrl:
            "/img/img-300x300.png",
    },
    {
        id: 2,
        title: "Paris, Texas",
        price: 2700,
        pictureUrl:
            "/img/img-300x300.png",
    },
    {
        id: 3,
        title: "Rififi",
        price: 1500,
        pictureUrl:
            "/img/img-300x300.png",
    },
];

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    useEffect(
        () => {
            setTimeout(async () => {
                setItems(products);
            }, 2000); //simula llamada a una api
        }, [])

    return (
        <>
            {greeting}
            <div className="listContainerWrapper">
                <ItemList items={items} />
            </div>
        </>
    );
};

export default ItemListContainer;