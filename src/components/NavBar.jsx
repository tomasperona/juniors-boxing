//menu con logo de la tienda, links de navegacion
import CartWidget from './CartWidget.jsx'
export default function NavBar() {

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 w-full box-border bg-red-500 p-4 text-white flex items-center justify-between z-50'>
                <h1 className='p-2 rounded text-white hover:text-red-100 '>JUNIORS BOXING</h1>
                <ul className='flex items-center gap-8 list-none m-0'>
                 <li>
                     <a className='visited:text-white'  href="#">Guantes</a>
                 </li>
                 <li>
                     <a className='' href="#">Elementos de Entrenamiento</a>
                 </li>
                 <li>
                     <a href="#">Vendas y Cascos</a>
                 </li>
                 <li>
                     <a className='' href="#">Contacto</a>
                 </li>
                 <li>
                     <CartWidget></CartWidget>
                 </li>
             </ul>
             </nav>
         </>

     )
}