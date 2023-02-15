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
    erroresLogin.innerHTML = ""
    if (
      isValid("usuario", inputs.usuario) &&
      isValid("password", inputs.password)
    ) {
      localStorage.setItem("usuario", inputs.usuario)
      navigate("/usuario", { replace: true })
      window.location.reload(false)
    } else {
      if (!isValid("usuario", inputs.usuario)) {
        erroresLogin.innerHTML = "<p>Usuario inválido</p>"
      }
      if (!isValid("password", inputs.password)) {
        erroresLogin.innerHTML += "<p>Contraseña inválida</p>"
      }
    }
  }

  const erroresLogin = document.getElementById("errorLogin")

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
          <p>
            (Entre 4 y 16 caracteres con al menos un numero, una letra, son
            válidos también _ o -)
          </p>
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
          <label for="password" className="acceso__formulario_campo_nombre">
            Contraseña
          </label>
          <p>(Al menos 8 caracteres con al menos 1 letra y 1 número)</p>
          <input
            type="password"
            name="password"
            className="acceso__formulario_campo_input"
            value={inputs.password || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div id="errorLogin"></div>
        <button
          type="submit"
          name="Iniciar Sesión"
          className="acceso__btn_submit"
        >
          Acceder
        </button>
      </form>
    </main>
  )
}

export default Login
