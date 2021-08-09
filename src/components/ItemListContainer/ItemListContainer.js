import React from 'react';
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({ greeting }) => {

    return (
        <div>
            {greeting}

            <ItemCount stock={3} initial={1} />
        </div>
    );
};

export default ItemListContainer;