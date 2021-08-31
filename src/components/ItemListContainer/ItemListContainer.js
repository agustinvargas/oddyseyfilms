import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
// import { allProducts } from '../../helpers/allProducts';
import Loader from '../Loader/Loader';
import { getFirestore } from '../../firebase';

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    const getProducts = () => {
        const firebaseProducts = [];
        getFirestore().collection("items").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((item) => {
                firebaseProducts.push({ ...item.data(), id: item.id });
            });
            setItems(firebaseProducts);
        });
    };


    useEffect(() => {
        // getFirestore().collection("items").get().then((data) => {
        //     const products = data.docs.map((doc) => doc.data())
        //     setItems(products)

        // })
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