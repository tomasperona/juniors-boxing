//pagina de contacto.

export default function Contact() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
      <section className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 items-center mx-auto my-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contacto</h2>
        <p className="text-gray-700 text-center mb-4">¿Tenés alguna consulta o sugerencia? Completá el formulario y te responderé a la brevedad.</p>
        <form className="w-full flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className=" text-black border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="email" placeholder="Email" className="text-black border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <textarea placeholder="Mensaje" rows={4} className="text-black border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" required></textarea>
          <button type="submit" className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 transition-colors">Enviar</button>
        </form>
        <div className="text-center text-gray-500 text-sm mt-4">
          <p>Desarrollado por <span className="font-semibold text-gray-700">Tomás Perona</span></p>
          <p className="mt-1">Esta página fue hecha con <span className="font-semibold text-blue-600">React.js</span></p>
        </div>
      </section>
    </div>
  );
}