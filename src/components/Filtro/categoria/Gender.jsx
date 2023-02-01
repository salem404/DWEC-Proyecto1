/**
 * Componente filtro
 *
 * @author Paula Rumeu Romero
 * @module Gender
 */

// Import componente
import FiltroBtn from "../FiltroBtn"

/**
 *
 * Opciones de filtro por género
 *
 * @requires FiltroBtn
 *
 * @returns {JSX}
 */
const Gender = ({ updateGender, updatePageNumber }) => {
  /**
   * @name gender
   * @description Tipos de género
   * @constant
   */
  const gender = ["female", "male", "genderless", "unknown"]
  return (
    <div className="filtro__modos">
      <h1 className="filtro__modos-titulo">Género</h1>
      <div className="filtro__modos-opciones">
        {gender.map((item, index) => (
          <FiltroBtn
            key={index}
            index={index}
            name="gender"
            task={updateGender}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}
export default Gender
