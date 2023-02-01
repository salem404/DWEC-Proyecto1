/**
 * Componente header
 *
 * @author Paula Rumeu Romero
 * @module Header
 */

import logo from "../assets/img/logo.png"
/**
 * @requires module:Logo
 * @returns {JSX} Header con logo y botón de login
 */
const Header = () => {
  return (
    <header className="header">
      <a href="/" aria-label="Inicio">
        <img className="header__logo" src={logo} alt="Rick y Morty" />
      </a>
      <a href="/login" className="header__btn_acceso">
        <span aria-label="Acceso"></span>
      </a>
    </header>
  )
}

export default Header
