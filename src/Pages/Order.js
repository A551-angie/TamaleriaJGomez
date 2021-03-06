import React, { useContext } from "react";

//se importa el contexto
import { CON } from "../Components/ShoppingCart";
import OrderStyle from "../Components/OrderStyle";

function Order() {
  const { PRODUCTS, cart, increase, decrease } = useContext(CON);
   
  //se crea un objeto vacio
  let keys = [];
  let values = [];

  Object.values(cart).forEach((value, idx) => {
    
    if (value > 0) {
      keys.push(Object.keys(cart)[idx]);
      values.push(value);
    }
  });

  let shoppingList = [];

  Object.keys(PRODUCTS).forEach(category => {
    PRODUCTS[category].forEach((item, idx) => {
      keys.forEach(key => {
        if (key === PRODUCTS[category][idx].id) {
          shoppingList.push(PRODUCTS[category][idx]);
        }
      })
    });
  });

  let total = 0;
  shoppingList.forEach((item, idx) => {
    total += item.cost * values[idx];
  });

  const PHONE = 573134134864;
  const request = [];

  shoppingList.forEach((item, idx) => {
    request.push(`Producto ${idx+1}:
      ${item.name}:
     (${values[idx]})
      
    `);
  });

  const MESSAGE = `Nuevo pedido:${request.join(``)}`;

  return (
    <OrderStyle
      cartValues={values}
      shoppingList={shoppingList}
      increase={increase}
      decrease={decrease}
      phone={PHONE}
      message={MESSAGE}
      total={total}
    />
  )
}

export default Order;