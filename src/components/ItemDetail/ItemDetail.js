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
        addToCart(item, qua);
    }

    return (
        <Card style={{ width: "18rem" }} id={`detail-product-${id}`}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                {quantity > quantityInitial ? (
                    <Link to="/cart">
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