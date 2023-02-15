/**
 * Componente input de datos
 *
 * @author Paula Rumeu Romero
 * @module Datos
 */

// Imports react
import { useState } from "react"

// Import componente
import isValid from "../components/Validacion"

/**
 * Componente de datos personales
 *
 * @requires module:Validacion
 *
 * @returns {JSX} Edición de datos
 */
const Datos = () => {
  /**
   * @name setInputs
   * @description Almacena los inputs
   * @requires react
   * @function
   */
  const [inputs, setInputs] = useState({})

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
    error.innerHTML = ""

    if (
      isValid("nombre", inputs.nombre) &&
      isValid("edad", inputs.edad) &&
      isValid("email", inputs.email)
    ) {
      localStorage.setItem("nombre", inputs.nombre)
      localStorage.setItem("edad", inputs.edad)
      localStorage.setItem("email", inputs.email)
      window.location.reload()
    }
    if (!isValid("nombre", inputs.nombre)) {
      error.innerHTML = "<p>Nombre inválido</p>"
    }
    if (!isValid("edad", inputs.edad)) {
      error.innerHTML = "<p>Edad inválida</p>"
    }
    if (!isValid("email", inputs.email)) {
      error.innerHTML += "<p>Email inválido</p>"
    }
  }

  const error = document.getElementById("error")

  return (
    <main>
      <br />
      <h1>Edición de datos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="acceso__formulario_campo_input"
            placeholder="Nuevo nombre"
            value={inputs.nombre || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            name="edad"
            className="acceso__formulario_campo_input"
            placeholder="?"
            value={inputs.edad || ""}
            onChange={handleChange}
            min="1"
            max="130"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="acceso__formulario_campo_input"
            placeholder="Nuevo email"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div id="error"></div>
        <button type="submit" name="Editar" className="acceso__btn_submit">
          Editar
        </button>
      </form>
    </main>
  )
}

export default Datos
