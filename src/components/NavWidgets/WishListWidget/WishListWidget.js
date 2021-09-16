import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { WishListContext } from "../../../contexts/wishListContext/WishListContext";
import { Link } from "react-router-dom";

const WishListWidget = () => {
    const { wishListNumber } = useContext(WishListContext);

    return (
        <div className="cart">
            <Link to="/deseados"><FontAwesomeIcon icon={["fas", "heart"]} size="lg" className="mx-2 " role="button" /></Link>

            <span className="cart__number">{wishListNumber()}</span>
        </div>
    )
}

export default WishListWidget;