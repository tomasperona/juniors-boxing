
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import CartWidget from './components/CartWidget.jsx'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <NavBar />

      <main className="pt-20 w-full min-h-screen bg-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer bienvenida="Hola, bienvenidos a Juniors Boxing" />
              }
            />
            <Route
              path="/guantes"
              element={
                <ItemListContainer
                  categoria="guantes"
                  bienvenida="Guantes de Boxeo"
                />
              }
            />
            <Route
              path="/entrenamiento"
              element={
                <ItemListContainer
                  categoria="entrenamiento"
                  bienvenida="Elementos de Entrenamiento"
                />
              }
            />
            <Route
              path="/vendas-cascos"
              element={
                <ItemListContainer
                  categoria="vendas-cascos"
                  bienvenida="Vendas y Cascos"
                />
              }
            />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
