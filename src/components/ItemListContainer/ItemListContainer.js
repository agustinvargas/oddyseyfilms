import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import Loader from '../Loader/Loader';
import { getFirestore } from '../../firebase';

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

    console.log(items)
    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
        gridGap: "16px",
        justifyContent: "center"

    }
    return (
        <div className="my-5" style={style}>
            {items.length === 0 ? (
                <Loader loading />
            ) : (
                <ItemList allProducts={items} />
            )}
        </div>
    );
};

export default ItemListContainer;