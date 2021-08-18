import React from 'react';
import "./Hero.scss";
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="presentation"        >
            <div className="mx-3">
                <h3 className="text-uppercase text-white">Cinefilia de culto</h3>
                <h1 className="mb-5 text-uppercase text-white">Tu odisea en el mundo</h1>
            </div>
            <button type="botton" className="btn btn-danger mt-5 text-uppercase"><Link to="/tienda" className="text-decoration-none text-white">Descubrir productos</Link></button>
        </div >
    );
};

export default Hero;