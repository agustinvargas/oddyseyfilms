import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-5">
            <Navbar.Brand href="#">TrufóFilms</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><FontAwesomeIcon icon={["far", "heart"]} /></NavDropdown.Item>
                        <NavDropdown.Item href="#action5"><FontAwesomeIcon icon={["fas", "heart"]} /></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action6">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                        Link
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;