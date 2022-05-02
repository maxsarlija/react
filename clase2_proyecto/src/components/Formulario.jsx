import React from 'react'
import Titulo from './titulo'

function Formulario({saludo, valorNombre}) {
  return (
    <div>
        <h1>Formulario De Contacto</h1>
        <input type="text" placeholder='Ingrese su mail'/>
        <button>Enviar</button>
    </div>
  )
}

export default Formulario