/**
 * Componente botón cambio de modo
 *
 * @author Paula Rumeu Romero
 * @module ModoBtn
 */

import { useState, useEffect } from "react"

/**
 * Componente de botón que añade un tema a la página y lo modifica al pulsar
 *  el botón, recargando todos los componentes
 *
 * @summary Botón que cambia entre modo claro y oscuro
 *
 * @returns {JSX} Botón de cambio de modo
 */
const ModoBtn = () => {
  /**
   * @name setTheme
   * @description Si encuentra en el tema en el localStorage se le asigna a theme y si no se asigna light
   * @requires react
   * @function
   */
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  /**
   * @name toggleTheme
   * @description Alterna entre modo claro y oscuro
   * @constant
   */
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
    window.location.reload(false)
  }

  /**
   * @name useEffect
   * @description Asigna el tema al LocalStorage
   * @requires react
   * @function
   */
  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.body.className = theme
  }, [theme])

  return <button className="footer__btn_modo" onClick={toggleTheme}></button>
}

export default ModoBtn
