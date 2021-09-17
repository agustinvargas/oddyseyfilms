import React, { useContext } from 'react';
import { WishListContext } from '../../contexts/wishListContext/WishListContext';
import { CartContext } from '../../contexts/cartContext/CartContext';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WishList = () => {
    const { wishList, clearWishList, removeFromWishList } = useContext(WishListContext);
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (item, qua) => {
        addToCart(item, qua);
        removeFromWishList(item.id)
    }
    console.log("QUE LEG DEL WISHLIST", wishList)

    return (
        wishList.length > 0 ? (
            <Card id={`detail-product-${id}`} className="flex-lg-row mx-lg-auto align-items-lg-center my-lg-5 p-lg-5" style={{ maxWidth: "1000px" }}>
                <Card.Img variant="top" src={pictureUrl} style={{ maxWidth: "500px" }} alt={title} />
                <Card.Body className="px-lg-5">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
            //     <>
            //         <Container>
            //             <Row>
            //                 <Col className="d-flex justify-content-between align-items-center">
            //                     <Button onClick={() => clearWishList()} variant="primary">VACIAR</Button>
            //                 </Col>
            //             </Row>
            //             {wishList.map(el => (
            //                 <Row key={el.item.id}>
            //                     <Col xs={3}>
            //                         <img className="w-100" alt={el.item.title} src={el.item.pictureUrl} />
            //                     </Col>
            //                     <Col xs={9}>
            //                         <div className="d-flex justify-content-between align-items-center"><span>{el.item.title}</span><Button onClick={() => removeFromWishList(el.item.id)} variant="primary">x</Button></div>
            //                         <div className="d-flex justify-content-between align-items-center"><span>Precio</span><span>{el.item.price}</span></div>
            //                         <div className="d-flex justify-content-between align-items-center"><Button onClick={() => handleAddToCart(el.item, 1)}>Agregar al carrito</Button></div>
            //                     </Col>
            //                 </Row>))}
            //             {/* <Row>
            //                 <Col>
            //                     <Button as={Link} to="/finalizar-compra">Agregar al carrito</Button>
            //                 </Col>
            //             </Row> */}
            //         </Container>

            //     </>
        ) : <Button as={Link} to="/tienda">NO HAY PRODUCTOS AGREGADOS. IR A LA TIENDA</Button>
    );
}

export default WishList;