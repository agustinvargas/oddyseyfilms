import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ loading }) => {
    if (loading) {
        return (
            <div className="w-100 d-flex justify-content-center align-items-center">
                <Spinner animation="grow" style={{ margin: "33vh 0" }} />
            </div>
        )
    }
}

export default Loader;