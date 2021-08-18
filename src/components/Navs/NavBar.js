import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from "../NavWidgets/CartWidget/CartWidget";
import SearchWidget from "../NavWidgets/SearchWidget/SearchWidget";
import WishListWidget from "../NavWidgets/WishListWidget/WishListWidget";
import { Link } from "react-router-dom"
import './NavBar.scss';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-3 px-lg-5 d-flex justify-content-between">
            <Navbar.Brand translate="no"><Link exact to="/">odysseyFilms</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    // style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
                    <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/categorias/cine">Cine</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/categorias/series">Series</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/categorias/anime">Animé</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
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