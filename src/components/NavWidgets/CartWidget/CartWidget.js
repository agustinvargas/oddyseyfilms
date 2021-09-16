import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartWidget.scss"
import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartNumber } = useContext(CartContext);
    return (

        <div className="cart">
            <Link to="/carrito"><FontAwesomeIcon icon="shopping-cart" size="lg" className="mx-2 cart__icon " role="button" /></Link>

            <span className="cart__number">{cartNumber()}</span>
        </div>
    )
}

export default CartWidget;