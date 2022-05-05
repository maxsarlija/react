import './App.css'
import './styles/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Formulario from './components/Formulario';
import Header from './components/Header'
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Titulo from './components/Titulo';
import logo from './logo.svg'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <Titulo />
      <Titulo titulo='Tiendita'/>
      <ItemListContainer greeting='ItemListContainer PlaceHolder' />
      <Formulario />    
           {/*Desafio Clase 3 + onAdd*/ }
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  )
}


export default App