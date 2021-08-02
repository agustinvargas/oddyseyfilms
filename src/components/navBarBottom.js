import { Navbar } from 'react-bootstrap';
import CartWidget from "./cartWidget";
import SearchWidget from "./searchWidget";
import WishListWidget from "./wishListWidget";

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