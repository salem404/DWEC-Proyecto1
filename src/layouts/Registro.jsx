/**
 * Componente página de registro
 *
 * @author Paula Rumeu Romero
 * @module Registro
 */

// Imports react
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Import componente
import isValid from "../components/Validacion"

/**
 * Componente de la página de registro con su fomulario correspondiente
 *
 * @requires module:Validacion
 *
 * @returns {JSX} Página de registro
 */
const Registro = () => {
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
    if (
      isValid("usuario", inputs.usuario) &&
      isValid("password", inputs.password) &&
      isValid("password2", inputs.password2, inputs.password) &&
      isValid("email", inputs.email)
    ) {
      navigate("/usuario", { replace: true })
      window.location.reload(false)
    }
  }
  return (
    <main className="acceso">
      <h1 className="acceso__titulo">Registro</h1>
      <p className="acceso__subtitulo">
        ¿Ya tienes cuenta?
        <a className="acceso__subtitulo_enlace" href="login">
          ¡Login!
        </a>
      </p>
      <form className="acceso__formulario" onSubmit={handleSubmit}>
        <div className="acceso__formulario_campo">
          <label for="usuario" className="acceso__formulario_campo_nombre">
            Usuario
          </label>
          <input
            type="text"
            name="usuario"
            className="acceso__formulario_campo_input"
            value={inputs.usuario || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="acceso__formulario_campo">
          <label for="contraseña" className="acceso__formulario_campo_nombre">
            Contraseña
          </label>
          <p>(Al menos 8 caracteres con letras y números)</p>
          <input
            type="password"
            name="password"
            className="acceso__formulario_campo_input"
            value={inputs.password || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="acceso__formulario_campo">
          <label
            for="repetir contraseña"
            className="acceso__formulario_campo_nombre"
          >
            Repetir contraseña
          </label>
          <input
            type="password"
            name="password2"
            className="acceso__formulario_campo_input"
            value={inputs.password2 || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="acceso__formulario_campo">
          <label for="email" className="acceso__formulario_campo_nombre">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="acceso__formulario_campo_input"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" name="Registrarse" className="acceso__btn_submit">
          ¡Libéralo ahora!
        </button>
      </form>
    </main>
  )
}

export default Registro
