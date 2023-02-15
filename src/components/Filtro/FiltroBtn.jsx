/**
 * Componente filtro
 *
 * @author Paula Rumeu Romero
 * @module FiltroBtn
 */

/**
 * Componente de los posibles campos para un filtro
 *
 * @param {String} input Objetivo del filtro
 * @param {any} task
 * @param {function} updatePageNumber Actualizar página del listado
 * @param {*} index Index del filtro
 * @param {string} name Nombre del filtro
 */
const FiltroBtn = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div className="filtro__modos-check radio">
      <input
        onClick={(x) => {
          task(input)
          updatePageNumber(1)
        }}
        className="filtro__modos-input radio"
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label
        onClick={(x) => {
          task(input)
          updatePageNumber(1)
        }}
        className="filtro__modos-label radio"
        htmlFor={`${name}-${index}`}
      >
        {" "}
        {input}{" "}
      </label>
    </div>
  )
}

export default FiltroBtn
