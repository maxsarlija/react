import React, {useState} from 'react'

export const ItemCount = ({initial,stock,onAdd}) => {
    const [count, setCount] = useState(initial)
   
    function btnsumar (){
        setCount(count + 1)
        console.log(count)
    }

    function btnrestar (){
        setCount(count - 1)
        console.log(count)
    }
 
    function restablecer () {
        setCount(null)
    }
  
    function onAdd(){
        console.log("Agregado al carrito")
    }
  return (
      <div>
      <button class="btn btn-primary" onClick={btnrestar}>-</button>
      <input type="text"  placeholder={numero}/>
      <button class="btn btn-primary" onClick={btnsumar}>+</button>
      <button class="btn btn-primary" onClick={restablecer}>Restablecer</button>
      <br></br>
      <button class="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
      </div>
  )
}
export default ItemCount 