
import ImtemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import CartWidget from "./components/NavBar/CartWidget"
import './App.css'

function App() {

  return (
    <>
    <div>
      <NavBar />
      <CartWidget />
      <ImtemListContainer /> 
    </div>

    </>
  );
}

export default App
