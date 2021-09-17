import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ loading }) => {
    if (loading) {
        return (
            <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: "75vh" }}>
                <Spinner animation="grow" />
            </div>
        )
    }
}

export default Loader;