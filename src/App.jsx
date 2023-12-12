
import ImtemListContainer from "./components/ItemListContainer"
import EjemploContador from "./components/EjemploContador"
import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import './App.css'

function App() {

  return (
    <>
<div>
  
  
  <NavBar />
  <ImtemListContainer saludo = "Propo enviada desde App" /> 
  <EjemploContador />
  <CartWidget />
</div>

    </>
  );
}

export default App
