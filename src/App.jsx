import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import CartWidget from './components/CartWidget.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCount from './components/ItemCount.jsx'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer bienvenida="Hola, bienvenidos a Juniors Boxing" />
      <ItemCount />
    </BrowserRouter>
  )
}

export default App
