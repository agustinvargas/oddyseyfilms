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
import AlertForm from "../Alert/Alert"

const Checkout = () => {
    const { cart, setCart, calcTotal } = useContext(CartContext)
    const [customerInfo, setCustomerInfo] = useState({
        name: null,
        email: null,
        emailcheck: null,
        phone: null
    })
    const [order, setOrder] = useState(false)
    const [alert, setAlert] = useState(false)

    const { name, email, emailcheck, phone } = customerInfo;
    const isDiabledButton = !(name && email && phone);

    const history = useHistory()

    const handleChange = event => {
        setCustomerInfo({ ...customerInfo, [event.target.name]: event.target.value });
    };

    const handleFinishPurchase = () => {
        if (!(email === emailcheck)) {
            setAlert(true)
            // check both emails
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
                    // If order is ok, the cart will empty. Besides, stock will be updated
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
                    <>
                        
                        <Form className="px-lg-5">
                            <h1 className="mb-5">Completá tu datos</h1>
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
                            {alert && <AlertForm state={alert} heading="Chequeá la info" text="Al parecer, las contraseñas de los correos no coinciden" />}
                        </Form>
                    </>
                }
            </Container>
            : <Message text="Debés agregar productos a tu carrito" />
    )
}

export default Checkout