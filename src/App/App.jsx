/**
 * Componente base de la aplicación
 *
 * @author Paula Rumeu Romero
 * @module App
 */

// Imports de estilos
import "../assets/sass/main.scss"

// Imports react
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Imports componentes
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../layouts/Home"
import NotFound from "../layouts/NotFound"
import Contacto from "../layouts/Contacto"
import Login from "../layouts/Login"
import Registro from "../layouts/Registro"
import Usuario from "../layouts/Usuario"
import Listado from "../layouts/Listado"
import CartaDetails from "../layouts/CartaDetails"

/**
 * Base de la aplicación con un router para organizar elementos, header y footer
 *
 *
 * @requires react
 * @requires react-router-dom
 *
 * @requires module:Header
 * @requires module:Footer
 * @requires module:Home
 * @requires module:NotFound
 * @requires module:Contacto
 * @requires module:Login
 * @requires module:Registro
 * @requires module:Usuario
 * @requires module:Listado
 * @requires module:CartaDetails
 *
 * @return {JSX} Aplicación base
 */
const App = () => {
  /**
   * @name theme
   * @description Si encuentra en el tema en el localStorage se le asigna a theme y si no se asigna light
   * @requires react
   * @constant
   */
  const [theme] = useState(localStorage.getItem("theme") || "light")

  /**
   * @name useEffect
   * @description Asigna el tema al LocalStorage
   * @requires react
   * @function
   */
  useEffect(() => {
    localStorage.setItem("theme", theme)
  })

  return (
    <div className={theme}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/listado/:id" element={<CartaDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
