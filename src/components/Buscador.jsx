/**
 * Componente buscador
 *
 * @author Paula Rumeu Romero
 * @module Buscador
 */

/**
 * Buscador que actualiza la lista al cambiar
 *
 * @param {String} setBuscador Búsqueda
 * @param {Int} updatePageNumber Número de página
 *
 * @returns {JSX} Buscador
 */
const Buscador = ({ setBuscador, updatePageNumber }) => {
  return (
    <form>
      <input
        onChange={(e) => {
          updatePageNumber(1)
          setBuscador(e.target.value)
        }}
        placeholder="Busca personajes"
        className="search"
        type="text"
      />
    </form>
  )
}
export default Buscador
