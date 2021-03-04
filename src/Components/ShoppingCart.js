//Context provee una forma de pasar datos a través del árbol de componentes sin
// tener que pasar props manualmente en cada nivel se pasan de padre a hijos
import React, { createContext } from "react";

import tamalOne from "../Images/tamal3.png";
import tamaltwo from "../Images/imgTamal1.jpeg";
import tamalthree from "../Images/imgTamal.jpeg";

// se crea una constante para guardar el contexto
const CON = createContext();

function ShoppingCart(props) {
  // se crea un objeto con los productos y sus categorias
  const PRODUCTS = {
    general: [
      {
        id: "gen1",
        name: "Grande",
        category: "tamal1",
        styles: {
          backgroundImage: `url('${tamalOne}')`
        }
      },
      {
        id: "gen2",
        name: "Mediano",
        category: "tamal2",
        styles: {
          backgroundImage: `url('${tamaltwo}')`
        }
      },
      {
        id: "gen3",
        name: "Pequeño",
        category: "tamal3",
        styles: {
          backgroundImage: `url('${tamalthree}')`
        }
      }
    ],

    tamal1: [
      {
        id: "emp1",
        name: "Tamal Grande",
        description: "Tamal con contramuslo o colombina, carne de cerdo, tocino, huevo y zanahoria",
        cost: 3000,
        styles: {
          backgroundImage: `url('${tamalOne}')`
        }
      }
    ],

    tamal2: [
      {
        id: "ham1",
        name: "Tamal Medino",
        description: "Tamal con colombina, tocino, carne de cerdo, huevo y zanahoria",
        cost: 2700,
        styles: {
          backgroundImage: `url('${tamaltwo}')`
        }
      }
    ],
    tamal3: [
      {
        id: "beb1",
        name: "Tamal Pequeño",
        description: "Tamal con contramuslo, tocino y zanahoria",
        cost: 2200,
        styles: {
          backgroundImage: `url('${tamalthree}')`
        }
      },
    ]
  }
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