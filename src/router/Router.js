import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "../components/Navs/NavBar";
import NavBarBottom from "../components/Navs/NavBarBottom";
import Hero from '../components/Hero/Hero';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Hero />
                        <ItemListContainer greeting="Este es el propGreeting" />
                    </Route>
                </Switch>
                <NavBarBottom />
            </BrowserRouter>
        </>
    );
};

export default Router;