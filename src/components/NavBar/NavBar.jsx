import CartWidget from "./CartWidget"



const NavBar = () => {


    return (
        <div>
            <h1>Glamour-A</h1>
            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
                <li>
                    <a href="">Sobre nosotros</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar