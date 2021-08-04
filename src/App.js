// Component
import NavBar from "./components/navBar";
import NavBarBottom from "./components/navBarBottom";
import PropGreeting from "./components/propGreeting"
import ItemListContainer from "./components/ItemListContainer"

// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar />
      <PropGreeting />
      <ItemListContainer />
      <NavBarBottom />
    </>
  );
}

export default App;
