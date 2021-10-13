import { useContext, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import CartWidget from "../NavWidgets/CartWidget/CartWidget";
import SearchWidget from "../NavWidgets/SearchWidget/SearchWidget";
import WishListWidget from "../NavWidgets/WishListWidget/WishListWidget";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { auth } from "../../firebase";
import { UserContext } from "../../contexts/userContext/UserContext";
import { useHistory } from "react-router";

const NavBar = () => {
  const { login, setLogin } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(user.email);
      }
    });
  }, []);

  const signOut = () => {
    auth.signOut().then(() => {
      setLogin(null);
      history.push("/");
    });
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="px-3 px-lg-5 d-flex justify-content-between"
    >
      <Navbar.Brand translate="no">
        <Link exact to="/">
          odysseyFilms
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link as={Link} to="/tienda">
            Tienda
          </Nav.Link>
          <NavDropdown title="Categorías" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="/categorias/cine">
              Cine
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categorias/series">
              Series
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categorias/anime">
              Animé
            </NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Link as={Link} to="/registro">
            Registro
          </Nav.Link> */}
          {login ? (
            <>
              <Nav.Link as={Link} to="/mi-cuenta">
                Mi cuenta
              </Nav.Link>
              <Button variant="danger" onClick={() => signOut()}>
                Cerrar sesión
              </Button>
            </>
          ) : null}
          {!login ? (
            <Nav.Link as={Link} to="/registro">
              Registro
            </Nav.Link>
          ) : null}
        </Nav>
      </Navbar.Collapse>
      <div className="d-none d-lg-flex">
        <SearchWidget className="mx mx-lg-3" />
        <WishListWidget />
        <CartWidget />
      </div>
    </Navbar>
  );
};

export default NavBar;
