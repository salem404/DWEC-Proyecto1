/**
 * Componente carta
 *
 * @author Paula Rumeu Romero
 * @module Carta
 */

// Imports react
import React from "react"
import { Link } from "react-router-dom"

/**
 * Usando los resultados recibidos, rellena los campos
 * y los muestra de forma ordenada
 *
 * @summary Muestra la carta con los datos
 *
 * @param {Map} results Resultados de una llamada a la API con datos de un personaje
 *
 * @returns {JSX} Carta rellenada
 */
const Carta = ({ page, results }) => {
  if (results) {
    var display = results.map((x) => {
      let { id, image, name } = x
      return (
        <Link to={`${page}${id}`} key={id}>
          <div key={id} className="listado__lista">
            <div className="listado__lista_producto">
              <img src={image} alt={name} />
              <div className="listado__lista_producto_nombre">{name}</div>
            </div>
          </div>
        </Link>
      )
    })
    return <div className="listado">{display}</div>
  } else {
    return <h1>Sin resultados...</h1>
  }
}

export default Carta
