/**
 * Componente página de login
 *
 * @author Paula Rumeu Romero
 * @module Login
 */

// Imports react
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Import componente
import isValid from "../components/Validacion"

/**
 * Componente de la página de login con su fomulario correspondiente
 *
 * @requires module:Validacion
 *
 * @returns {JSX} Página de login
 */
const Login = () => {
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
      isValid("password", inputs.password)
    ) {
      navigate("/usuario", { replace: true })
      window.location.reload(false)
    }
  }
  return (
    <main className="acceso">
      <h1 className="acceso__titulo">Login</h1>
      <p className="acceso__subtitulo">
        ¿No tienes cuenta?
        <a className="acceso__subtitulo_enlace" href="/registro">
          ¡Registrate ahora!
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
            pattern="^[a-z\d_-]{4,16}$"
            required
          />
        </div>
        <div className="acceso__formulario_campo">
          <label for="password" className="acceso__formulario_campo_nombre">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="acceso__formulario_campo_input"
            value={inputs.password || ""}
            onChange={handleChange}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
          />
        </div>
        <button
          type="submit"
          name="Iniciar Sesión"
          className="acceso__btn_submit"
        >
          ¡Libéralo ahora!
        </button>
      </form>
      <p className="acceso__subtitulo">
        ¿No puedes acceder?
        <a href="/recuperar" className="acceso__subtitulo_enlace">
          Reestablecer contraseña
        </a>
      </p>
    </main>
  )
}

export default Login
