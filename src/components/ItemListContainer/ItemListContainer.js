import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import Loader from '../Loader/Loader';
import { getFirestore } from '../../firebase';
import "./ItemListContainer.scss"

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const getProducts = () => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.onSnapshot(querySnapshop => {
            setItems(querySnapshop.docs.map(doc => {
                return ({ id: doc.id, ...doc.data() })
            }))
        })
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        items.length === 0 ? (
            <Loader loading />
        ) : (
            <div>
                <h1 className="text-center px-4 my-5">Elegí tu poster</h1>
                <div className="mx-lg-5 list-container">
                    <ItemList allProducts={items} />
                </div>
            </div>
        )
    );
};

export default ItemListContainer;