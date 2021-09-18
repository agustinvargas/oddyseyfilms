import React, { useContext } from 'react';
import { WishListContext } from '../../contexts/wishListContext/WishListContext';
import { CartContext } from '../../contexts/cartContext/CartContext';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Message from '../Messages/Message';

const WishList = () => {
    const { wishList, clearWishList, removeFromWishList } = useContext(WishListContext);
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (item, qua) => {
        addToCart(item, qua);
        removeFromWishList(item.id)
    }

    return (
        <div>
            {wishList.length > 0 ? (
                <>
                    <div className="container d-flex justify-content-between m-auto py-5" style={{ maxWidth: "1000px" }}>
                        <h1>Productos que te interesan</h1>
                        <Button onClick={() => clearWishList()} variant="link">Vaciar la lista de deseos</Button>
                    </div>
                    {wishList.map(el => (
                        <Card key={el.item.id} className="flex-lg-row mx-lg-auto align-items-lg-center mb-lg-5 p-lg-5" style={{ maxWidth: "1000px" }}>
                            <Card.Img variant="top" src={el.item.pictureUrl} style={{ maxWidth: "500px" }} alt={el.item.title} />
                            <Card.Body className="px-lg-5">
                                <Card.Title>{el.item.title}</Card.Title>
                                <Card.Text>${el.item.price}</Card.Text>
                                <Card.Text>{el.item.description}</Card.Text>
                                <div className="d-flex my-5 justify-content-evenly justify-content-lg-between align-items-center">
                                    <Button variant="dark" onClick={() => handleAddToCart(el.item, 1)}>Agregar al carrito</Button>
                                    <FontAwesomeIcon onClick={() => removeFromWishList(el.item.id)} size="md" icon="minus-circle" role="button" />
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </>
            ) : <Message text="No hay productos en tu lista de deseos" />
            }
        </div>
    );
}

export default WishList;