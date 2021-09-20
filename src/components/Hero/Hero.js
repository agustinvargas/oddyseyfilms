import React from 'react';
import "./Hero.scss";
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="presentation"        >
            <div className="mx-3">
                <h3 className="text-uppercase text-white">Cinefilia de culto</h3>
                <h1 className="mb-5 text-uppercase text-white">Tu odisea en el mundo</h1>
            </div>
            <Button as={Link} to="/tienda" type="botton" className="btn btn-danger mt-5 text-uppercase text-white">Descubrir afiches</Button>
        </div >
    );
};

export default Hero;