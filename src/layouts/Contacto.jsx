/**
 * Componente página de contacto
 *
 * @author Paula Rumeu Romero
 * @module Contacto
 */

// Imports react
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Import componente
import isValid from "../components/Validacion"

/**
 * Componente de la página de contacto con su fomulario correspondiente
 *
 * @requires module:Validacion
 *
 * @returns {JSX} Página de contacto
 */
const Contacto = () => {
  /**
   * @name setInputs
   * @description Almacena los inputs
   * @requires react
   * @function
   */
  const [inputs, setInputs] = useState({})

  /**
   * @name navigate
   * @description Función para cambio de pantalla
   * @requires react-router-dom
   * @function
   */
  const navigate = useNavigate()

  /**
   * @name handleChange
   * @description Al cambiar el target cambia los valores de los inputs almacenados
   * @function
   * @param {event} event Cambio en el input
   */
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  /**
   * @name handleSubmit
   * @description Al mandar el target se validan los almacenados en input
   * @requires navigate
   * @function
   * @param {event} event Mandado de datos de un formulario
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (isValid("email", inputs.email) && isValid("texto", inputs.mensaje)) {
      document.getElementById("enviado").innerHTML =
        "<p>Mensaje enviado, redireccionando al inicio...</p>"
      setTimeout(function () {
        navigate("/", { replace: true })
        window.location.reload(false)
      }, 2000)
    }
  }
  return (
    <main className="acceso">
      <h1 className="acceso__titulo">Contáctanos</h1>
      <p className="acceso__subtitulo">¿Qué tienes en mente?</p>
      <form
        className="acceso__formulario"
        id="contactoForm"
        onSubmit={handleSubmit}
      >
        <div className="acceso__formulario_campo">
          <label for="mensaje" className="acceso__formulario_campo_nombre">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            className="acceso__formulario_campo_textarea"
            value={inputs.mensaje || ""}
            onChange={handleChange}
            required
            pattern=".+"
            g
          ></textarea>
        </div>
        <div className="acceso__formulario_campo">
          <label for="email" className="acceso__formulario_campo_nombre">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="acceso__formulario_campo_input"
            value={inputs.email || ""}
            onChange={handleChange}
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            required
          />
        </div>
        <div id="enviado"></div>
        <button type="submit" className="acceso__btn_submit">
          Enviar
        </button>
      </form>
    </main>
  )
}

export default Contacto
