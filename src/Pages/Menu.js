import React, { useContext } from "react";

// se inporta el contexto
import { CON } from "../Components/ShoppingCart";
import MenuStyle from "../Components/MenuStyle";

function Menu() {
  const { PRODUCTS, cart, increase, decrease } = useContext(CON);

  const [list, setList] = React.useState(PRODUCTS.tamal1);
  const [search, setSearch] = React.useState("");
  let filteredList = PRODUCTS.tamal1;
   
  //funcion para que nos agregue la categoria en menustyle
  function clickCategories(e) {
    setList(PRODUCTS[e.target.dataset.category]);
  }

  function handleChange(e) {
    setList(PRODUCTS.tamal1
      .concat(PRODUCTS.tamal2)
      .concat(PRODUCTS.tamal3)
    );
  
    setSearch(e.target.value);
  }

  search ?
    filteredList = list
      .filter(element => {
        return `${element.name} ${element.description}`
          .toLowerCase()
          .includes(search.toLowerCase());
      })
  : filteredList = list;

  const con = Object.values(cart).reduce((accum, curr) => accum + curr);

  return(
    <MenuStyle
      handleChange={handleChange}
      categories={PRODUCTS.general}
      clickCategories={clickCategories}
     list={filteredList}
      increase={increase}
      decrease={decrease}
      amount={cart}
      totalAmount={con}
    />
  )
}

export default Menu;