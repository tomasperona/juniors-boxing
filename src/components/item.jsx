
import { Link } from 'react-router-dom'

function Item({ title, img, price, id }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 m-4 w-full max-w-xs transition-transform hover:scale-105 hover:shadow-xl border border-gray-100">
            <img className="w-full h-48 object-cover rounded-lg mb-4" src={img} alt={title} />
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{title}</h2>
            <p className="text-xl font-bold text-green-600 mb-4">${price.toLocaleString('es-AR')}</p>
            <Link to={`/producto/${id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors w-full text-center">Ver el Producto</Link>
        </div>
    )
}

export default Item