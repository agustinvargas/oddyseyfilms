import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ItemCount({ stock, initial, onAdd }) {
    const [counter, setCounter] = useState(initial)
    const [btnAddDisabled, setBtnAddDisabled] = useState(initial === stock ? true : false)
    const [btnSubsDisabled, setBtnSubsDisabled] = useState(true)

    const addOne = () => {
        setBtnSubsDisabled(false)
        if (counter === stock - 1) {
            setCounter(counter + 1)
            setBtnAddDisabled(true)
        }
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const subsOne = () => {
        setBtnAddDisabled(false)
        if (counter === initial + 1) {
            setCounter(counter - 1)
            setBtnSubsDisabled(true)
        }
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="py-5">
            <Button type="button" variant="dark" disabled={btnSubsDisabled} onClick={() => subsOne()}>-</Button>
            <span className="mx-3">{counter}</span>
            <Button type="button" variant="dark" disabled={btnAddDisabled} onClick={() => addOne()}>+</Button>
            <Button type="button" variant="dark" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
        </div>
    );
}

export default ItemCount;
