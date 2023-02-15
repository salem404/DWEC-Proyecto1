/**
 * Validación de datos
 *
 * @author Paula Rumeu Romero
 * @module Validacion
 */

/**
 * Validación de datos según tipo
 *
 * @param {String} campo Tipo de input a validar
 * @param {String} input Datos a validar
 * @param {String} input2 Datos secundarios a validar
 * @returns {boolean} Validez
 */
const isValid = (campo, input, input2 = "") => {
  switch (campo) {
    // Texto @ texto (. texto) . texto
    case "email":
      if (input.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        return true
      }
      return false
    case "password":
      // Al menos 8 caracteres, 1 letra y 1 número
      if (input.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        return true
      }
      return false
    case "usuario":
      // Entre 4 y 16 caracteres numeros, letras, _ o -
      if (input.match(/^[a-z\d_-]{4,16}$/)) {
        return true
      }
      return false
    case "texto":
      // Todo, hecho para asegurarnos de que no entra vacío
      if (input.match(/.+/g)) {
        return true
      }
      return false
    case "password2":
      // Igual a la primera password
      if (input === input2) {
        return true
      }
      return false
    case "nombre":
      // Nombre propio
      if (input.match(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/)) {
        return true
      }
      return false
    case "edad":
      if (input > 0) {
        return true
      }
      return false
    default:
      return false
  }
}

export default isValid
