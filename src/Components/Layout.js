import React from "react";

import "./Styles/Layout.css";

import logoTamal from "../Images/logoLayout.png"

function Layout(props) {
  return (
    <section className="layout">
      <div className="logo">
      <img src={logoTamal} alt="logoTamal"/> 
      </div>
      {props.children}
    </section>
  )
}

export default Layout;