// Component
import NavBar from "./components/Navs/NavBar";
import NavBarBottom from "./components/Navs/NavBarBottom";
import Presentation from "./components/Presentation/Presentation"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar />
      <Presentation />
      <ItemListContainer greeting="Este es el propGreeting" />
      <NavBarBottom />
    </>
  );
}

export default App;
