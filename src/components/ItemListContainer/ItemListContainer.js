import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
// import { allProducts } from '../../helpers/allProducts';
import Loader from '../Loader/Loader';
import { getFirestore } from '../../firebase';

const ItemListContainer = ({ greeting }) => {

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