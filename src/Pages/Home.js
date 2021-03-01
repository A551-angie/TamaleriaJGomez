import React from "react";

import { Link } from "react-router-dom";

import "./Styles/Home.css";

import logoTamal from "../Images/logo.png"
import icono3 from "../Images/icon-03.png"

function Home() {
  return (
    <section className="home">
      <div className="logo">
      <img src={logoTamal} alt="logoTamal"/> 
      </div>

      <Link  to="/menu" className="button">
        ¡ORDENAR AHORA!
        <img src={icono3} alt="icono mano"/> 
      </Link>

      <footer>
       todos los derechos reservados &copy;
      </footer>
    </section>
  )
}

export default Home;