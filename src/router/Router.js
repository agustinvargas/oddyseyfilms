import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "../components/Navs/NavBar";
import NavBarBottom from "../components/Navs/NavBarBottom";
import Hero from '../components/Hero/Hero';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';


const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={<ItemListContainer greeting={<Hero />} />} />
                <Route path="/category/:id" component={<ItemListContainer greeting={<Hero />} />} />
                <Route path="/item/:id" component={<ItemDetailContainer />} />
            </Switch>
            <NavBarBottom />
        </BrowserRouter>
    );
};

export default Router;