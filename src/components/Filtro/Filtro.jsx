/**
 * Componente filtro
 *
 * @author Paula Rumeu Romero
 * @module Filtro
 */

// Import componentes
import Gender from "./categoria/Gender"
import Species from "./categoria/Species"

/**
 * Componente filtro con dos modalidades y un reseteo
 *
 * @param {number} pageNumber Número de página
 * @param {function} updatePageNumber Cambia el número de página
 * @param {function} updateStatus Cambia el estado del filtro
 * @param {function} updateGender Cambia el género del filtro
 * @param {function} updateSpecies Cambia la especie del filtro
 *
 * @requires module:Gender
 * @requires module:Species
 *
 * @returns {JSX} Filtro
 */
const Filtro = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  /**
   * @name clear
   * @description Quita todos los filtros
   * @function
   */
  const clear = () => {
    updateStatus("")
    updateGender("")
    updateSpecies("")
    updatePageNumber(1)
    window.location.reload(false)
  }
  return (
    <div className="filtro">
      <h1 className="filtro__titulo">Filtros</h1>
      <div className="filtro__modos">
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
      <div onClick={clear} className="filtro__subtitulo">
        Quitar filtros
      </div>{" "}
    </div>
  )
}

export default Filtro
