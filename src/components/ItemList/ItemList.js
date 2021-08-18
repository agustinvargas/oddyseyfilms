import React from 'react';
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemList = ({ allProducts }) => {
    const { categoryId } = useParams();

    return (
        categoryId
            ? allProducts
                .filter(el => el.category === categoryId)
                .map(el => {
                    return <Item data={el} key={el.id} />;
                })
            : allProducts.map(el => {
                return <Item data={el} key={el.id} />;
            })
    )
};

export default ItemList;