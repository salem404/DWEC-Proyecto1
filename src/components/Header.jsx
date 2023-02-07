/**
 * Componente header
 *
 * @author Paula Rumeu Romero
 * @module Header
 */

import logo from "../assets/img/RICK_MORTY.png"
/**
 * @requires module:Logo
 * @returns {JSX} Header con logo y botón de login o usuario
 */
const Header = () => {
  if (localStorage.getItem("usuario")) {
    return (
      <header className="header">
        <a href="/" aria-label="Inicio">
          <img className="header__logo" src={logo} alt="Rick y Morty" />
        </a>

        <a href="/usuario" className="header__btn_acceso">
          <span aria-label="Acceso"></span>
        </a>
      </header>
    )
  }
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
