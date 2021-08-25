import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartWidget.scss"
import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext/CartContext";

const CartWidget = (itemQuantity) => {
    const { cartNumber } = useContext(CartContext);
    return (
        <div className="cart">
            <FontAwesomeIcon icon="shopping-cart" size="lg" className="mx-2 cart__icon " role="button" />
            <span className="cart__number">{cartNumber()}</span>
        </div>
    )
}

export default CartWidget;