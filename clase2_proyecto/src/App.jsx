import './App.css'
import './styles/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Formulario from './components/Formulario';
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer';
import Titulo from './components/Titulo';
import logo from './logo.svg'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [numero, setNumero] = useState([0])
  function contador (){
    setCount(count + 1)
    console.log(count)
  }
  
  function btnsumar (){
    setNumero(numero + 1)
    console.log(numero)
  }


  function btnrestar (){
    setNumero(numero - 1)
    console.log(numero)
  }
  function restablecer (){
    setNumero(null)
    
  }
  
  function addtocarrito(){
    console.log( "Agregado al carrito")
  }
  return (
    <div className="App">
      <Header />
      <Titulo />
      <Titulo titulo='Tiendita'/>
      <ItemListContainer greeting='ItemListContainer PlaceHolder' />
      <Formulario />    
      
      {count}
      <br></br><button class="btn btn-primary" onClick={contador}> CLICK  ++ </button>
      <br></br>
      {/* Desafio Clase 3 */}
      <button class="btn btn-primary" onClick={btnrestar}> - </button>
      <input type="text" placeholder={numero} />
      <button class="btn btn-primary" onClick={btnsumar}> + </button>
      <button class="btn btn-primary" onClick={restablecer}> Restablecer </button>
      <br></br>
      <button class="btn btn-primary" onClick={addtocarrito}> Agregar Al Carrito </button>
    </div>
  )
}


export default App