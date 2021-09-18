import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../../contexts/cartContext/CartContext";

const ItemDetail = ({ item }) => {
    const { id, title, price, pictureUrl, description, stock } = item
    const quantityInitial = 0
    const [quantity, setQuantity] = useState(quantityInitial)

    const { addToCart } = useContext(CartContext);

    const onAdd = (qua) => {
        setQuantity(qua)
        addToCart(item, qua)
    }

    return (
        <Card id={`detail-product-${id}`} className="flex-lg-row mx-lg-auto align-items-lg-center my-lg-5 p-lg-5" style={{ maxWidth: "1000px" }}>
            <Card.Img variant="top" src={pictureUrl} style={{ maxWidth: "500px" }} alt={title} />
            <Card.Body className="px-lg-5">
                <Card.Title>{title}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Card.Text>{description}</Card.Text>
                {quantity > quantityInitial ? (
                    <Link to="/carrito">
                        <button className="btn btn-dark">
                            Terminar mi compra
                        </button>
                    </Link>
                ) : (
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                )}
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;