import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import "./Item.scss"

function Item({ id, title, price, pictureUrl }) {
    return (
        <Card style={{ width: "18rem" }} id={`product-${id}`}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>ACA VA EL DETALLE DEL PRODUCTO</Card.Text>
                <Card.Text>${price}</Card.Text>
                <ItemCount stock={3} initial={1} />
                <Button variant="dark">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;