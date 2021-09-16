import React from 'react';
import { useParams } from 'react-router';

const Thanks = () => {
    const { orderId } = useParams();
    return (
        <div>
            <h1>Esta es la thank you page. Creamos tu orden con el ID {orderId}</h1>
        </div>
    );
}

export default Thanks;