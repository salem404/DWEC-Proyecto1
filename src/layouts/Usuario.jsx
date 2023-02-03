/**
 * Componente página de usuario
 *
 * @author Paula Rumeu Romero
 * @module Usuario
 */

// Import imagen
import profileImage from "../assets/img/profileImage.png"

/**
 * Componente de usuario con miscelanea
 *
 * @returns {JSX} Página de usuario
 */
const Usuario = () => {
  /**
   * @name today
   * @description Objeto Date del cual se sacan día y hora
   * @function
   */
  const today = new Date(),
    date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

  return (
    <main className="listado">
      <div className="listado__usuario">
        <img
          src={profileImage}
          className="listado__usuario_foto"
          alt="Foto de usuario"
        />
        <h1 id="nombreUsuario" className="listado__usuario_nombre-usuario">
          {localStorage.getItem("usuario")}
        </h1>
        <div className="listado__usuario_info">
          <p>
            Última conexión: {date} a las {time}
          </p>
          <p>Email: {localStorage.getItem("email")}</p>
          <p>Tema preferido: {localStorage.getItem("theme")}</p>
        </div>
      </div>
    </main>
  )
}

export default Usuario
