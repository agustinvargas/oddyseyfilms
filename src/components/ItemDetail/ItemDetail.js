import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = (props) => {
    const { id, title, price, pictureUrl } = props.items

    return (
        <Card style={{ width: "18rem" }} id={`detail-product-${id}`}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Detalle largo del producto cuyo Item ID es: {props.idItem}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <ItemCount stock={3} initial={1} />
                <Button variant="dark">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;