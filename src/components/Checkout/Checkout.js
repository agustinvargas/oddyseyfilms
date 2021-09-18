import { Button, Container } from "react-bootstrap"
import React, { useState } from "react"
import { useContext } from "react"
import { Form } from "react-bootstrap"
import { CartContext } from "../../contexts/cartContext/CartContext"
import { getFirestore } from "../../firebase"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useHistory } from "react-router-dom"
import Loader from "../Loader/Loader"
import Message from "../Messages/Message"

const Checkout = () => {
    const { cart, setCart, calcTotal } = useContext(CartContext)
    const [customerInfo, setCustomerInfo] = useState({
        name: null,
        email: null,
        emailcheck: null,
        phone: null
    })
    const [order, setOrder] = useState(false)

    const { name, email, emailcheck, phone } = customerInfo;
    const isDiabledButton = !(name && email && phone);

    const history = useHistory()

    const handleChange = event => {
        setCustomerInfo({ ...customerInfo, [event.target.name]: event.target.value });
    };

    const handleFinishPurchase = () => {
        if (!(email === emailcheck)) {
            return alert("Los correos no coinciden")
        } else {

            setOrder(true);
            const db = getFirestore();
            const orders = db.collection("orders");
            const batch = db.batch();

            const infoCart = cart.map(({ item, quantity }) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity,
            }));

            const newOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: infoCart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: calcTotal()
            };
            console.log("Nueva orden desde el checkout", newOrder)
            console.log("Cart desde Checkout", cart)
            orders
                .add(newOrder)
                .then((response) => {
                    console.log("Productos a Firebase", response);
                    cart.forEach(({ item, quantity }) => {
                        const docRef = db.collection("items").doc(item.id);
                        batch.update(docRef, { stock: item.stock - quantity });
                    });
                    batch.commit();
                    setCart([])
                    history.push(`/orden-creada/${response.id}`)
                    setOrder(false)
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        cart.length > 0 ?
            <Container className="w-75 py-5 mx-auto" >
                {order ? <Loader loading /> :
                    <Form className="px-lg-5">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label for="name">Nombre</Form.Label>
                            <Form.Control name="name" type="text" onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label for="email">Correo electrónico</Form.Label>
                            <Form.Control name="email" type="email" onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label for="email">Repetir correo electrónico</Form.Label>
                            <Form.Control name="emailcheck" type="email" onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label for="phone">Teléfono</Form.Label>
                            <Form.Control name="phone" type="number" onChange={handleChange} required />
                        </Form.Group>
                        <Button disabled={isDiabledButton} variant="dark" onClick={handleFinishPurchase}>
                            Realizar pedido
                        </Button>
                    </Form>}
            </Container>
            : <Message text="Debés agregar productos a tu carrito" />
    )
}

export default Checkout