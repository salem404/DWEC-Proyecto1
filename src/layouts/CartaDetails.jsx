/**
 * Componente detalles de la carta
 *
 * @author Paula Rumeu Romero
 * @module CartaDetails
 */

// Imports react
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

/**
 * Información en profundidad de un personaje
 *
 * @returns {JSX} Carta detallada
 */
const CartaDetails = () => {
  /**
   * @name id
   * @description id de la carta
   * @requires react-router-dom
   * @constant
   */
  const { id } = useParams()

  const [fetchedData, updateFetchedData] = useState([])

  const { name, location, origin, gender, image, species } = fetchedData

  /**
   * @name api
   * @description API a la que se le hace la petición
   * @constant
   * @type {string}
   */
  const api = `https://rickandmortyapi.com/api/character/${id}`

  /**
   * @name useEffect
   * @description Actualiza la petición a la API
   * @requires react
   * @function
   * @async
   */
  useEffect(() => {
    ;(async function () {
      let data = await fetch(api).then((res) => res.json())
      updateFetchedData(data)
    })()
  }, [api])

  return (
    <div className="vista__galeria">
      <div className="vista__galeria_slide-item_content_info">
        <h1>{name}</h1>
        <a href="/listado">
          <img className="img-fluid" src={image} alt="" />
        </a>
        <p>Gender: {gender} </p>
        <p>Location: {location?.name}</p>
        <p>Origin: {origin?.name}</p>
        <p>Species: {species}</p>
      </div>
    </div>
  )
}

export default CartaDetails
