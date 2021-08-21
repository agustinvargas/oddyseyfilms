import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import { allProducts } from '../../helpers/allProducts';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const { itemId } = useParams();
    console.log(itemId);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await allProducts()
                const product = res.find(el => el.id === parseInt(itemId))
                product ? setItems(product) : alert("No existe ningún producto con el parámetro indicado en la URL")
            } catch (err) {
                console.log("Error al cargar los productos: ", err);
            }
        };
        getAllProducts()
    }, [itemId]);

    console.log(items);

    return (
        <>
            {items.length === 0 ? (
                <div className="text-center">
                    <p>
                        Cargando producto...
                    </p>
                </div>
            ) : (
                <ItemDetail item={items} />
            )}
        </>
    );
};

export default ItemDetailContainer;
