
# Juniors Boxing 🥊

Este proyecto es una aplicación web desarrollada con React.js y Vite, diseñada para la gestión de productos y ventas de una tienda de boxeo. Incluye funcionalidades de carrito de compras, listado y detalle de productos, formulario de contacto y checkout, utilizando Firebase para la gestión de datos.

## Características principales

- **Catálogo de productos:** Visualización de productos disponibles con detalles individuales.
- **Carrito de compras:** Añade, elimina y ajusta la cantidad de productos en el carrito.
- **Checkout:** Formulario para completar la compra y almacenar la orden en Firebase.
- **Contacto:** Sección para que los usuarios puedan enviar consultas.
- **Contexto global:** Manejo del estado del carrito usando Context API de React.
- **Estilizado:** Uso de CSS para una interfaz moderna y responsiva.

## Estructura del proyecto

```
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartContext.jsx
│   │   ├── CartWidget.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── Contact.jsx
│   │   ├── item.jsx
│   │   ├── ItemCount.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemListContainer.jsx
│   │   └── NavBar.jsx
│   └── data/
│       ├── firestore.js
│       ├── mockService.js
│       └── products.js
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
```

## Instalación y ejecución

1. **Clona el repositorio:**
	```bash
	git clone https://github.com/tu-usuario/juniors-boxing.git
	cd juniors-boxing
	```
2. **Instala las dependencias:**
	```bash
	npm install
	```
3. **Configura Firebase:**
	- Crea un proyecto en [Firebase](https://firebase.google.com/).
	- Obtén las credenciales y reemplázalas en `src/data/firestore.js`.
4. **Inicia la aplicación:**
	```bash
	npm run dev
	```
5. **Abre en el navegador:**
	- Visita [http://localhost:5173](http://localhost:5173)

## Dependencias principales

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)

## Estructura de carpetas clave

- **components/**: Componentes reutilizables de la interfaz.
- **data/**: Servicios y datos simulados o reales (Firebase).
- **assets/**: Imágenes y recursos estáticos.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request para sugerencias o mejoras.

## Licencia

Este proyecto está bajo la licencia MIT.

---

Desarrollado por [Tu Nombre].
