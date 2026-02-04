import { useState } from 'react';
import { createBuyOrder } from '../data/firestore.js';

export default function CheckoutForm({ cart, total, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createBuyOrder({
        buyer: { name, email, phone },
        cart,
        total,
        date: new Date().toISOString()
      });
      setSuccess(true);
    } catch (err) {
      setError('Hubo un error al procesar la compra.');
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div className="mt-8 p-6 bg-green-100 rounded text-green-800 text-center">
        ¡Compra realizada con éxito!<br />
        Pronto nos contactaremos contigo.<br />
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Cerrar</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 p-6 bg-white rounded shadow flex flex-col gap-4">
      <h3 className="text-xl font-bold text-black mb-2">Datos para la compra</h3>
      <input
        type="text"
        placeholder ="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="border px-3 py-2 rounded text-black"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="border px-3 py-2 rounded text-black"
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
        className="border px-3 py-2 rounded text-black"
      />
      {error && <div className="text-red-600">{error}</div>}
      <div className="flex gap-4">
        <button type="submit" disabled={loading} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
        <button type="button" onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">Cancelar</button>
      </div>
    </form>
  );
}
