import React, {useState} from 'react'

export const ItemCount = ({initial,stock,onAdd}) => {
    const [count, setCount] = useState(initial)
   
    function btnsumar (){
        
        if (count > stock - 1){
            setCount(stock)
            console.log("Lo siento no disponemos de stock")
         }
         else{
            setCount(count + 1)       
        }
        console.log(count)
    }

    function btnrestar (){
        
        if (count < stock){
            setCount(stock)
            console.log("Lo siento el pedido minimo es 1")
        }
        else{
            setCount(count - 1)
        console.log(initial)
        }
        
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
      <input type="text"  placeholder={"Ingrese un numero"}/>
      <button class="btn btn-primary" onClick={btnsumar}>+</button>
      <button class="btn btn-primary" onClick={restablecer}>Restablecer</button>
      <br></br>
      <button class="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
      </div>
  )
}
export default ItemCount 