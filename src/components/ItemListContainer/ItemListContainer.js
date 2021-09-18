import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import Loader from '../Loader/Loader';
import { getFirestore } from '../../firebase';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

        items.length === 0 ? (
            <Loader loading />
        ) : (
            <>
                <div className="m-5" style={style}>
                    <ItemList allProducts={items} />
                </div>
            </>
        )

    );
};

export default ItemListContainer;