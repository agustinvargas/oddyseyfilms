import React from 'react';
import Item from "../Item/Item";

const ItemList = ({ items }) => {

    return (
        <>
            {items.map(el => {
                return (
                    <Item key={el.id} id={el.id} title={el.title} price={el.price} pictureUrl={el.pictureUrl} />
                )
            })}
        </>
    );
};

export default ItemList;