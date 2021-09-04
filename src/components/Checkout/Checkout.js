import { Button, Container } from "react-bootstrap"
import React, { useState } from "react"
import { useContext } from "react"
import { Form } from "react-bootstrap"
import { CartContext } from "../../contexts/cartContext/CartContext"
import { getFirestore } from "../../firebase"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link } from "react-router-dom"


const Checkout = () => {
    const { cart, calcTotal } = useContext(CartContext)
    const [customerInfo, setCustomerInfo] = useState({
        name: null,
        email: null,
        phone: null
    })
    const [order, setOrder] = useState(false)


    const { name, email, phone } = customerInfo;
    const isDiabledButton = !(name && email && phone);

    const handleChange = event => {
        setCustomerInfo({ ...customerInfo, [event.target.name]: event.target.value });
    };


    const handleFinishPurchase = () => {
        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();

        const infoCart = cart.map(({ item, quantity }) => ({
            items: {
                id: item.id,
                title: item.title,
                price: item.price,
            },
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

        orders
            .add(newOrder)
            .then((response) => {
                console.log("Productos a Firebase", response);
                cart.forEach(({ item, quantity }) => {
                    const docRef = db.collection("items").doc(item.id);
                    batch.update(docRef, { stock: item.stock - quantity });
                });
                batch.commit();
            })
            .catch((error) => console.log(error))
            .finally(setOrder(true))
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Nombre" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Ingresá tu correo" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control name="phone" type="telephone" placeholder="Teléfono" onChange={handleChange} />
                </Form.Group>
                {order ? <Link to="/tienda"><Button variant="primary">
                    Realizar otro pedido
                </Button></Link> : <Button disabled={isDiabledButton} variant="primary" onClick={handleFinishPurchase}>
                    Realizar pedido
                </Button>}
            </Form>
        </Container>
    )
}

export default Checkout