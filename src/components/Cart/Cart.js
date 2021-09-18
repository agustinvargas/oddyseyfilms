import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext/CartContext';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.scss"
import Message from '../Messages/Message';

const Cart = () => {
    const { cart, clearCart, removeFromCart, subQuantity, plusQuantity, calcTotal } = useContext(CartContext);
    return (
        cart.length > 0 ? (
            <Container className="p-5">
                <Row>
                    <Col lg={8} className="p-lg-5">
                        <Row className="d-none d-lg-flex cart-ref">
                            <Col lg={6}>
                                <span className="cart-ref__text">Producto</span>
                            </Col>
                            <Col lg={3}>
                                <span className="cart-ref__text">Cantidad</span>
                            </Col>
                            <Col lg={3}>
                                <span className="cart-ref__text">Subtotal</span>
                            </Col>
                        </Row>
                        {cart.map(el => (
                            <Row key={el.item.id} className="cart-product d-flex justify-content-between align-items-center">
                                <Col xs={12} lg={6} className="pb-4 pb-lg-0">
                                    <div className="d-flex justify-content-between align-items-center pe-lg-4">
                                        <img style={{ maxWidth: "50px" }} alt={el.item.title} src={el.item.pictureUrl} />
                                        <span className="cart-product__title">{el.item.title}</span>
                                        <FontAwesomeIcon onClick={() => removeFromCart(el.item.id)} size="xs" icon="trash" role="button" />
                                    </div>
                                </Col>
                                <Col xs={7} lg={3}>
                                    <div className="d-flex ">
                                        <span>
                                            <Button type="button" variant="dark" onClick={() => subQuantity(el.item.id, 1)}>-</Button>
                                            <span className="mx-3">{el.quantity}</span>
                                            <Button type="button" variant="dark" onClick={() => plusQuantity(el.item.id, el.quantity, el.item.stock)}>+</Button>
                                        </span>
                                    </div>
                                </Col>
                                <Col xs={5} lg={3}>
                                    <div className="d-flex">
                                        <span className="cart-product__title">${el.quantity * el.item.price}</span>
                                    </div>
                                </Col>
                            </Row>))}
                    </Col>
                    <Col lg={4} className="cart-info my-5 my-lg-0" >
                        <Row className="cart-info">
                            <h1 className="py-3">Carrito</h1>
                            <p>Envío gratuito</p>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <span className="cart-info__title">Total</span>
                                <span className="cart-info__title">${calcTotal()}</span>
                            </div>
                            <div className="d-flex justify-content-between py-3">
                                <Button as={Link} to="/finalizar-compra" variant="dark">Finalizar compra</Button>
                                <Button onClick={() => clearCart()} variant="link" className="px-0">Vaciar el carrito</Button>
                            </div>
                        </Row>
                    </Col >
                </Row>
            </Container >
        ) : <Message text="No hay productos en tu carrito" />
    );
}

export default Cart;