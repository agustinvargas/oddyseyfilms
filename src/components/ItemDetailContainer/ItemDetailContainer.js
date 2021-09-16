import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
// import { allProducts } from '../../helpers/allProducts';
import Loader from '../Loader/Loader';
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    let { itemId } = useParams();

    useEffect(() => {
        const docRef = getFirestore().collection("items").doc(itemId);
        docRef.get().then((doc) => {
            if (doc.exists) {
                // setItems(doc.data())
                setItems({ id: doc.id, ...doc.data() })
            } else {
                console.error("Fallo al cargar el producto");
            }
        }).catch((error) => {
            console.log("Fallo al cargar el producto", error);
        });
    }, [itemId]);

    console.log(item);

    return (
        <>
            {item.length === 0 ? (
                <Loader loading />
            ) : (
                <ItemDetail item={item} />
            )}
        </>
    );
};

export default ItemDetailContainer;
