import { Navbar } from 'react-bootstrap';
import CartWidget from "../NavWidgets/CartWidget/CartWidget";
import SearchWidget from "../NavWidgets/SearchWidget/SearchWidget";
import WishListWidget from "../NavWidgets/WishListWidget/WishListWidget";

const NavBarBottom = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="bottom" className="px-3 px-lg-5 d-flex justify-content-around d-lg-none">
            <WishListWidget />
            <SearchWidget />
            <CartWidget />
        </Navbar>
    )
};

export default NavBarBottom