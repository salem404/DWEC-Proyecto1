/**
 * Componente filtro
 *
 * @author Paula Rumeu Romero
 * @module Species
 */

// Import componente
import FiltroBtn from "../FiltroBtn"

/**
 * Opciones de filtro por especie
 *
 * @requires FiltroBtn
 *
 * @returns {JSX}
 */
const Species = ({ updateSpecies, updatePageNumber }) => {
  /**
   * @name species
   * @description Tipos de especies
   * @constant
   */
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ]
  return (
    <div className="filtro__modos">
      <h1 className="filtro__modos-titulo">Especie</h1>
      <div className="filtro__modos-opciones">
        {species.map((item, index) => (
          <FiltroBtn
            key={index}
            index={index}
            name="species"
            task={updateSpecies}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}
export default Species
