import React from 'react';
import Item from "../Item/Item";

const ItemList = ({ allProducts }) => {

    return (
        <>
            {allProducts.map(el => {
                return (
                    // <Item key={el.id} id={el.id} title={el.title} price={el.price} pictureUrl={el.pictureUrl} />
                    <Item data={el} key={el.id} />
                )
            })}
        </>
    );
};

export default ItemList;