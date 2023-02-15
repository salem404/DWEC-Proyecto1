/**
 * Componente página de usuario
 *
 * @author Paula Rumeu Romero
 * @module Usuario
 */

// Import imagen
import profileImage from "../assets/img/profileImage.png"

// Import reactTimeAgo
import ReactTimeAgo from "react-time-ago"
import { useNavigate } from "react-router-dom"
import Datos from "../components/Datos"

/**
 * Componente de usuario con miscelanea
 *
 * @returns {JSX} Página de usuario
 */
const Usuario = () => {
  /**
   * @name today
   * @description Objeto Date actualizado
   * @function
   */
  const today = new Date()

  /**
   * @name navigate
   * @description Función para cambio de pantalla
   * @requires react-router-dom
   * @function
   */
  const navigate = useNavigate()
  /**
   * @name handleSubmit
   * @description Al mandar el target se validan los almacenados en input
   * @requires navigate
   * @function
   * @param {event} event Mandado de datos de un formulario
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.clear()
    navigate("/", { replace: true })
    window.location.reload()
  }

  return (
    <main className="listado">
      <div className="listado__usuario">
        <img
          src={profileImage}
          className="listado__usuario_foto"
          alt="Foto de usuario"
        />
        <h1 id="nombreUsuario" className="listado__usuario_nombre-usuario">
          {localStorage.getItem("usuario") || "Anónimo"}
        </h1>
        <div className="listado__usuario_info">
          <p>
            Última conexión: <ReactTimeAgo date={today} locale="es-SP" />
          </p>
          <p>Nombre: {localStorage.getItem("nombre") || "No introducido"}</p>
          <p>Edad: {localStorage.getItem("edad") || "x"} años</p>
          <p>Email: {localStorage.getItem("email") || "No introducido"}</p>
          <p>Tema preferido: {localStorage.getItem("theme")}</p>
          <br />
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="acceso__btn_submit">
            Log Out
          </button>
        </form>
        <Datos />
      </div>
    </main>
  )
}

export default Usuario
