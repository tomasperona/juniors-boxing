import { useParams } from 'react-router-dom'
import productsData from '../data/products'
import ItemCount from './ItemCount.jsx'
import { useCart } from './CartContext.jsx'
import { useState } from 'react'

export default function ItemDetailContainer() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div style={{padding: '2rem', textAlign: 'center'}}>Producto no encontrado</div>;
  }

  function handleAdd() {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] p-8 gap-8">
      <img src={product.img} alt={product.title} className="w-full max-w-md rounded-xl shadow-lg" />
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-xl text-green-600 font-bold">${product.price.toLocaleString('es-AR')}</p>
        <p className="text-gray-700">{product.description}</p>
        <div className="mt-4 flex flex-col gap-2">
          <ItemCount classname="text-black" value={quantity} setValue={setQuantity} />
          <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
            Agregar al carrito
          </button>
          {added && <span className="text-green-600 font-semibold">¡Agregado al carrito!</span>}
        </div>
      </div>
    </div>
  );
}
