import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { WishListContext } from '../../contexts/wishListContext/WishListContext';

const WishListButton = ({ data }) => {
    const { addToWishList } = useContext(WishListContext);
    const handleAddWishList = () => {
        addToWishList(data, 1)
    }

    return (
        <FontAwesomeIcon onClick={handleAddWishList} icon={["far", "heart"]} size="lg" className="mx-2 " role="button" />
    );
}

export default WishListButton;