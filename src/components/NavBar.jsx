//menu con logo de la tienda, links de navegacion
import CartWidget from './CartWidget.jsx'
import { NavLink } from "react-router-dom" // <-- Corrección aquí
export default function NavBar() {

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 w-full box-border bg-red-500 p-4 text-white flex items-center justify-between z-50'>
                <h1 className='p-2 rounded text-white hover:text-red-100 '>JUNIORS BOXING</h1>
                <ul className='flex items-center gap-8 list-none m-0'>
                 <li>
                     <a  className='visited:text-white'  href="#">Guantes</a>
                 </li>
                 <li>
                     <NavLink to="/entrenamiento">Elementos de Entrenamiento</NavLink>
                 </li>
                 <li>
                     <NavLink to="/vendas-cascos">Vendas y Cascos</NavLink>
                 </li>
                 <li>
                     <NavLink to="/contacto">Contacto</NavLink>
                 </li>
                 <li>
                     <CartWidget></CartWidget>
                 </li>
             </ul>
             </nav>
         </>

     )
}