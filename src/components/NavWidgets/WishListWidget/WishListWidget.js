import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { WishListContext } from "../../../contexts/wishListContext/WishListContext";
import { Link } from "react-router-dom";
import "../NavWidget.scss"

const WishListWidget = () => {
    const { wishList, wishListNumber } = useContext(WishListContext);

    return (
        <div className="widget">
            <Link to="/deseados"><FontAwesomeIcon icon={["fas", "heart"]} size="lg" className="mx-2 " role="button" /></Link>
            {wishList.length > 0 ?
                <span className="widget__number">{wishListNumber()}</span>
                : null
            }
        </div>
    )
}

export default WishListWidget;