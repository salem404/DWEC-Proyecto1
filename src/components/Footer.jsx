/**
 * Componente footer
 *
 * @author Paula Rumeu Romero
 * @module Footer
 */

// Import
import ModoBtn from "./ModoBtn"

/**
 * @requires module:ModoBtn
 * @returns {JSX} Footer con el botón de cambio de modo y enlaces a politica de privacidad y contacto
 */
const Footer = () => {
  return (
    <footer className="footer">
      <ModoBtn />
      <a href="/contacto">
        <button className="footer__btn_contacto" aria-label="Contacto"></button>
      </a>
    </footer>
  )
}

export default Footer
