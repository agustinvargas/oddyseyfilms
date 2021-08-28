import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext/CartContext';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, clearCart, removeFromCart, subQuantity, plusQuantity } = useContext(CartContext);
    return (
        cart.length > 0 ? (
            <Container>
                <Row>
                    <Col className="d-flex justify-content-between align-items-center">
                        <h1>Total: {cart.reduce(
                            (acc, el) => el.item.price * el.quantity + acc,
                            0
                        )}</h1>
                        <Button onClick={() => clearCart()} variant="primary">VACIAR</Button>
                    </Col>
                </Row>
                {cart.map(el => (
                    <Row key={el.item.id}>
                        <Col xs={3}>
                            <img className="w-100" alt={el.item.title} src={el.item.pictureUrl} />
                        </Col>
                        <Col xs={9}>
                            <div className="d-flex justify-content-between align-items-center"><span>{el.item.title}</span><Button onClick={() => removeFromCart(el.item.id)} variant="primary">x</Button></div>
                            <div className="d-flex justify-content-between align-items-center"><span>Precio</span><span>{el.item.price}</span></div>
                            <div className="d-flex justify-content-between align-items-center"><span>Cantidad</span><span><Button onClick={() => plusQuantity(el.item.id, el.quantity, el.item.stock)}>AGREGAR UNO</Button>{el.quantity} <Button onClick={() => subQuantity(el.item.id, 1)}>QUITAR UNO</Button></span></div>
                            <div className="d-flex justify-content-between align-items-center"><span>Total</span><span>{el.quantity * el.item.price}</span></div>
                        </Col>
                    </Row>))}
            </Container>
        ) : <Button as={Link} to="/tienda">NO HAY PRODUCTOS AGREGADOS. IR A LA TIENDA</Button>
    );
}

export default Cart;