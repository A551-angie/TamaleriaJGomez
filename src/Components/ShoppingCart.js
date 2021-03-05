//Context provee una forma de pasar datos a través del árbol de componentes sin
// tener que pasar props manualmente en cada nivel se pasan de padre a hijos
import React, { createContext } from "react";

import { PRODUCTS } from "./Products"



// se crea una constante para guardar el contexto
const CON = createContext();

function ShoppingCart(props) {

  //mapeamos el objeto products 
  const idProducts = PRODUCTS.tamal1
    .concat(PRODUCTS.tamal2)
    .concat(PRODUCTS.tamal3)
    .map(e => e = e.id)
  ;
  
  //definimos una variable vacia donde guardamos el estado inicial del carrito
  let initialStateCart = {};
  for (let i of idProducts) {
    initialStateCart[i] = 0
    
  }
  
  //declaramos un estado y le pasamos como parametro el estado inicial del carrito
  const [cart, setCart] = React.useState(initialStateCart);
   
  //se crea una constante incrementar con un evento que nos va a cambiar el estado
  const increase = e => {
    setCart({
      ...cart,
      [e.target.dataset.product]: cart[e.target.dataset.product] + 1
    });
  }
  
  //se crea una constante decremento 
  const decrease = e => {
    if(cart[e.target.dataset.product] > 0) {
      setCart({
        ...cart,
        [e.target.dataset.product]: cart[e.target.dataset.product] - 1
      });
    }
  }
  
  //pasamos el contexto desestructurado para pasarlos al menu
  return (
    <CON.Provider value={{ PRODUCTS ,cart, increase, decrease }}>
      {props.children}
    </CON.Provider>
  )
}

export { ShoppingCart, CON };