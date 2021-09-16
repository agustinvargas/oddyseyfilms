import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WishListContext } from "../../contexts/wishListContext/WishListContext";
import "./Item.scss"

function Item({ data }) {
    const { id, title, price, pictureUrl } = data
    const { wishList, setWishList, addToWishList } = useContext(WishListContext);
    console.log("ESTO ES DATA", data)
    const handleAddWishList = () => {
        addToWishList(data, 1)
        // setWishList([...wishList, data])
    }

    return (
        <Card style={{ maxWidth: "300px" }} id={`card-product-${id}`}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Link to={`/item/${id}`}>
                    <Button variant="dark">Ver detalles</Button>
                </Link>
                <Button onClick={handleAddWishList} variant="dark">Agregar deseos</Button>
            </Card.Body>
        </Card >
    );
}

export default Item;