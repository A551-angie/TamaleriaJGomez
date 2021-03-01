import React from "react";
import { Link } from "react-router-dom";
import icono2 from "../Images/icon-02.png"

import "./Styles/MenuStyle.css";

function MenuStyle(props) {
  return (
    <section className="menu">
      
      <div className="container-general-articles">
        <div className="general-articles">
          <div className="articles" >
            <div className="arrow"><i className="fas fa-chevron-left"/></div>
            {props.categories.map(e => {
              return (
                <figure onClick={props.clickCategories} data-category={e.category} key={e.id}>
                  <div style={e.styles} data-category={e.category}></div>
                  <figcaption data-category={e.category}>{e.name}</figcaption>
                </figure>
              )
            })}
          </div>
         <div className="arrow"> <i className="fas fa-chevron-right"></i></div>
        </div>
      </div>

      <div className="list-of-items">
        {props.list.map(e => {
          return (
            <article key={e.id}>
              <figure style={e.styles}></figure>
              <div className="contents">
                <h4>{e.name}</h4>
                <p>{e.description}</p>
                <p>$ {e.cost}</p>
                <p>{props.amount[e.id]}</p>
              </div>
              <div className="button button-left" onClick={props.decrease} data-product={e.id}>
                <div className="circle" data-product={e.id}>-</div>
              </div>
              <div className="button button-right" onClick={props.increase} data-product={e.id}>
                <div className="circle" data-product={e.id}>+</div>
              </div>
            </article>
          )
        })}
      </div>
      
      <div>
        <Link to="/order" className="to-shopping-cart">
        <img src={icono2} alt="icono carrito"/> 
          <p className="quantity">{props.totalAmount}</p>
        </Link>
      </div>
    </section>
  )
}

export default MenuStyle;