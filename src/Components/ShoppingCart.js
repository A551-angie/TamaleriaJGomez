import React, { createContext } from "react";

import tamalOne from "../Images/tamal3.png";
import tamaltwo from "../Images/imgTamal1.jpeg";
import tamalthree from "../Images/imgTamal.jpeg";

const CON = createContext();

function ShoppingCart(props) {

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

  const idProducts = PRODUCTS.tamal1
    .concat(PRODUCTS.tamal2)
    .concat(PRODUCTS.tamal3)
    .map(e => e = e.id)
  ;

  let initialStateCart = {};
  for (let i of idProducts) {
    initialStateCart[i] = 0
  }

  const [cart, setCart] = React.useState(initialStateCart);

  const increase = e => {
    setCart({
      ...cart,
      [e.target.dataset.product]: cart[e.target.dataset.product] + 1
    });
  }

  const decrease = e => {
    if(cart[e.target.dataset.product] > 0) {
      setCart({
        ...cart,
        [e.target.dataset.product]: cart[e.target.dataset.product] - 1
      });
    }
  }

  return (
    <CON.Provider value={{ PRODUCTS ,cart, increase, decrease }}>
      {props.children}
    </CON.Provider>
  )
}

export { ShoppingCart, CON };