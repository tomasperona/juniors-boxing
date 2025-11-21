import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import CartWidget from './components/CartWidget.jsx'  

function App() {

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
    </>
  )
}

export default App
