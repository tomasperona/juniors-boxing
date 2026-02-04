import { useCart } from './CartContext.jsx';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm.jsx';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!Array.isArray(cart) || cart.length === 0) {
    return <div className="p-8 text-center text-black ">El carrito está vacío.</div>;
  }

  const [showForm, setShowForm] = useState(false); // Moved this line down to maintain context

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 text-black">Carrito de compras</h2>
      <ul className="divide-y text-black mb-6">
        {cart.map(({ product, quantity }) => (
          <li key={product.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img src={product.img} alt={product.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <div className="font-semibold">{product.title}</div>
                <div className="text-gray-600">Cantidad: {quantity}</div>
                <div className="text-green-600 font-bold">${product.price.toLocaleString('es-AR')}</div>
              </div>
            </div>
            <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:underline">Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="text-xl font-bold mb-4 text-black">Total: ${total.toLocaleString('es-AR')}</div>
      <div className="flex gap-4">
        <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Vaciar carrito</button>
        <button onClick={() => setShowForm(true)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Finalizar compra</button>
      </div>
      {showForm && <CheckoutForm cart={cart} total={total} onClose={() => setShowForm(false)} />}
    </div>
  );
}
