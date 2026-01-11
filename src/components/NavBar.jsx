//menu con logo de la tienda, links de navegacion
import CartWidget from './CartWidget.jsx'
import { NavLink, Link } from "react-router-dom"
import { useState } from 'react'

export default function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 w-full box-border bg-red-500 p-4 text-white flex items-center justify-between z-50">
            <NavLink to="/" className="p-2 rounded text-white hover:text-red-100 text-xl font-bold">JUNIORS BOXING</NavLink>
            <button className="md:hidden ml-2" onClick={() => setOpen(!open)} aria-label="Abrir menú">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <ul className={`list-none m-0 flex-col md:flex-row md:flex items-center gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-red-500 md:bg-transparent transition-all duration-200 z-40 ${open ? 'flex' : 'hidden md:flex'}`}>
                <li className="w-full md:w-auto text-center py-2 md:py-0"><NavLink to="/guantes" onClick={() => setOpen(false)}>Guantes</NavLink></li>
                <li className="w-full md:w-auto text-center py-2 md:py-0"><NavLink to="/entrenamiento" onClick={() => setOpen(false)}>Elementos de Entrenamiento</NavLink></li>
                <li className="w-full md:w-auto text-center py-2 md:py-0"><NavLink to="/vendas-cascos" onClick={() => setOpen(false)}>Vendas y Cascos</NavLink></li>
                <li className="w-full md:w-auto text-center py-2 md:py-0"><NavLink to="/contacto" onClick={() => setOpen(false)}>Contacto</NavLink></li>
                <li className="w-full md:w-auto text-center py-2 md:py-0"><Link to="/cart" onClick={() => setOpen(false)}><CartWidget /></Link></li>
            </ul>
        </nav>
    )
}