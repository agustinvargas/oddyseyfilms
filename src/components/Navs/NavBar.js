import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from "../NavWidgets/CartWidget/CartWidget";
import SearchWidget from "../NavWidgets/SearchWidget/SearchWidget";
import WishListWidget from "../NavWidgets/WishListWidget/WishListWidget";
import { Link } from "react-router-dom"
import './NavBar.scss';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-3 px-lg-5 d-flex justify-content-between">
            <Link exact to="/"><Navbar.Brand translate="no">odysseyFilms</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    // style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link><Link to="/tienda">Tienda</Link></Nav.Link>
                    <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                        <NavDropdown.Item><Link to="/categorias/cine">Cine</Link></NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item><Link to="/categorias/series">Series</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/categorias/anime">Animé</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/contacto">Contacto</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className="d-none d-lg-inline-block">
                <SearchWidget className="mx mx-lg-3" />
                <WishListWidget />
                <CartWidget />
            </div>
        </Navbar >
    )
};

export default NavBar;