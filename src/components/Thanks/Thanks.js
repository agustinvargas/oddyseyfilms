import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase';
import Message from "../Messages/Message"
import Loader from '../Loader/Loader';
const Thanks = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState([]);
    const [orderError, setOrderError] = useState(false)

    useEffect(() => {
        const docRef = getFirestore().collection("orders").doc(orderId);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setOrder([{ id: doc.id, ...doc.data() }])
            } else {
                console.error("Fallo al cargar la orden");
                setOrderError(true)
            }
        }).catch((error) => {
            console.log("Fallo al cargar el producto", error);
        });
    }, [orderId, orderError]);

    console.log("ORDEN", order)

    return (
        <div className="mx-3 text-center">
            {
                orderError
                    ? <Message text="Vaya, parece que esa orden no existe" />
                    :
                    order.length > 0 ?
                        <div className="py-5 d-flex flex-column align-items-center justify-content-center">
                            {
                                order.map(el => {
                                    return (
                                        <>
                                            <h1 className="my-5">Gracias por tu compra, {el.buyer.name}</h1>
                                            <p>El código de tu orden es {el.id}</p>
                                            <p>Pediste {el.items[0].quantity} poster/s {el.items[0].title}</p>
                                        </>
                                    )
                                })
                            }
                        </div>
                        : <Loader loading />
            }
        </div>
    )
}

export default Thanks;