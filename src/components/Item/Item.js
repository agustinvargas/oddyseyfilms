import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.scss"

function Item({ data }) {
    const { id, title, price, pictureUrl } = data
    return (
        <Card style={{ maxWidth: "300px" }} id={`card-product-${id}`}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>Descripción corta del producto</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Link to={`/item/${id}`}>
                    <Button variant="dark">Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card >
    );
}

export default Item;