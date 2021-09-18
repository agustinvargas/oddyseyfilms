import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../NavWidget.scss"
import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart, cartNumber } = useContext(CartContext);
    return (

        <div className="widget">
            <Link to="/carrito"><FontAwesomeIcon icon="shopping-cart" size="lg" className="mx-2" role="button" /></Link>
            {cart.length > 0 ?
                <span className="widget__number">{cartNumber()}</span>
                : null
            }
        </div>
    )
}

export default CartWidget;