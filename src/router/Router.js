import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "../components/Navs/NavBar";
import NavBarBottom from "../components/Navs/NavBarBottom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import Thanks from '../components/Thanks/Thanks';
import WishList from '../components/WishList/WishList';
import Hero from '../components/Hero/Hero';
import Message from '../components/Messages/Message';
import SearchBar from '../components/SearchBar/SearchBar';
import Auth from '../components/Auth/Auth';
import UserDetail from '../components/UserDetail/UserDetail';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/carrito" component={Cart} />
                <Route path="/deseados" component={WishList} />
                <Route path="/finalizar-compra" component={Checkout} />
                <Route path="/item/:itemId" component={ItemDetailContainer} />
                <Route path="/categorias/:categoryId" component={ItemListContainer} />
                <Route path="/tienda" component={ItemListContainer} />
                <Route path="/orden-creada/:orderId" component={Thanks} />
                <Route path="/buscar" component={SearchBar} />
                <Route path="/log-in" component={Auth} />
                <Route path="/mi-cuenta" component={UserDetail} />
                <Route exact path="/" component={Hero} />
                <Route path="*"><Message text="¡Ups! No se encontró la página" /></Route>
            </Switch>
            <NavBarBottom /> {/* Only in mobile */}
        </BrowserRouter>
    );
};

export default Router;