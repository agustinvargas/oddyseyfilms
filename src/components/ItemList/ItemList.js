import React from 'react';
import Item from "../Item/Item";

const ItemList = ({ items }) => {

    return (
        <>
            {items.map(el => {
                return (
                    <>
                        <Item id={el.id} title={el.title} price={el.price} pictureUrl={el.pictureUrl} />
                    </>
                )
            })}
        </>
    );
};

export default ItemList;