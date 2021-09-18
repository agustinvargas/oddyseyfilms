import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import WishListButton from "../WishList/WishListButton"

function Item({ data }) {
    const { id, title, price, pictureUrl } = data

    return (
        <Card style={{ maxWidth: "300px", margin: "1em" }} id={`card-product-${id}`}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/item/${id}`}>
                        <Button variant="dark">Ver detalles</Button>
                    </Link>
                    <WishListButton data={data} />
                </div>
            </Card.Body>
        </Card >
    );
}

export default Item;