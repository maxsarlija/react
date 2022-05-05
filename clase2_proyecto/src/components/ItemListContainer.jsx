import React from 'react'

export default function ItemListContainer( { greeting } ) {

  return (

    <h1> { greeting } </h1>
    
    )
}

const task = new Promise((resolve,reject) => {
      console.log("new promise")
  //acciones
      resolve('200 ok')
    })
  