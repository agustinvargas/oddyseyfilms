import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Message({ text }) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center m-auto" style={{ maxWidth: "400px", height: "45vh" }}>
            <h1 className="text-center my-5">{text}</h1>
            <Button variant="dark" as={Link} to="/tienda">Ir a la tienda</Button>
        </div>
    );
}

export default Message;