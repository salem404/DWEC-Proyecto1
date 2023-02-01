/**
 * Componente página listado
 *
 * @author Paula Rumeu Romero
 * @module Listado
 */

// Imports react
import { useState, useEffect } from "react"

// Import componentes
import Filtro from "../components/Filtro/Filtro"
import Buscador from "../components/Buscador"
import Carta from "../components/Carta"
import Paginacion from "../components/Paginacion"

/**
 * Usa datos del buscador y la API para mostrar un listado de cartas paginado
 *
 * @requires module:Filtro
 * @requires module:Buscador
 * @requires module:Carta
 * @requires module:Paginacion
 *
 * @returns {JSX} Página listado
 */
const Listado = () => {
  /**
   * @name updatePageNumber
   * @description Actualiza el número de página del listado
   * @requires react
   * @function
   */
  const [pageNumber, updatePageNumber] = useState(1)

  /**
   * @name setBuscador
   * @description Actualiza la búsqueda
   * @requires react
   * @function
   */
  const [search, setBuscador] = useState("")

  /**
   * @name updateStatus
   * @description Actualiza el estado de los filtros
   * @requires react
   * @function
   */
  const [status, updateStatus] = useState("")

  /**
   * @name updateGender
   * @description Actualiza el filtro de género
   * @requires react
   * @function
   */
  const [gender, updateGender] = useState("")

  /**
   * @name updateSpecies
   * @description Actualiza el filtro de especie
   * @requires react
   * @function
   */
  const [species, updateSpecies] = useState("")

  /**
   * @name api
   * @description API a la que se le hace la petición
   * @constant
   * @type {string}
   */
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

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
  })

  /**
   * @name updateFetchedData
   * @description Actualiza la información recibida de la API
   * @requires react
   * @function
   */
  const [fetchedData, updateFetchedData] = useState([])

  // División de la información recibida de la API
  const { info, results } = fetchedData

  return (
    <div>
      <Filtro
        pageNumber={pageNumber}
        status={status}
        updateStatus={updateStatus}
        updateGender={updateGender}
        updateSpecies={updateSpecies}
        updatePageNumber={updatePageNumber}
      />
      <Buscador setBuscador={setBuscador} updatePageNumber={updatePageNumber} />
      <div className="Listado">
        <Carta page="/listado/" results={results} />
      </div>
      <Paginacion
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  )
}

export default Listado
