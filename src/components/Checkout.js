import { Button } from "bootstrap"
import React from "react"
import { useContext } from "react"
import { Form } from "react-bootstrap"
import CartContext from "../contexts/cartContext/CartContext"

const Checkout = () => {
    const { cart, setCart } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // const total = cart.reduce
        setCart([{ ...cart, }])
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Ingresá tu correo" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="telephone" placeholder="Teléfono" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Button variant="primary" type="submit" onSubmit={(e) => handleSubmit(e)}>
                Submit
            </Button>
        </Form>
    )
}

export default Checkout