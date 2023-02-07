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
          <p>Email: {localStorage.getItem("email") || "No introducido"}</p>
          <p>Tema preferido: {localStorage.getItem("theme")}</p>
        </div>
      </div>
    </main>
  )
}

export default Usuario
