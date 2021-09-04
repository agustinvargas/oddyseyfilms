import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "../components/Navs/NavBar";
import NavBarBottom from "../components/Navs/NavBarBottom";
import Hero from '../components/Hero/Hero';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Contact from '../pages/Contact';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/carrito" component={Cart} />
                <Route path="/finalizar-compra" component={Checkout} />
                <Route path="/item/:itemId" component={ItemDetailContainer} />
                <Route path="/categorias/:categoryId" component={ItemListContainer} />
                <Route path="/contacto" component={Contact} />
                <Route path="/tienda" component={ItemListContainer} />
                <Route exact path="/">
                    <ItemListContainer greeting={<Hero />} />
                </Route>
            </Switch>
            <NavBarBottom /> {/* Only in mobile */}
        </BrowserRouter>
    );
};

export default Router;