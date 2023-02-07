/**
 * Componente página error 404
 *
 * @author Paula Rumeu Romero
 * @module NotFound
 */

/**
 * @return {JSX} Página error 404
 */
const NotFound = () => {
  return (
    <div className="otro">
      <div className="otro__titulo">
        <h1 className="otro__titulo_mensaje">¡Página no encontrada!</h1>
      </div>
      <img
        alt="Kero mareado"
        src="https://i.imgur.com/kXJkEfW.gif"
        className="otro__animado"
      />
      <div className="otro__opciones">
        <a className="otro__opciones_volver" href="/">
          Volver a inicio
        </a>
      </div>
    </div>
  )
}

export default NotFound
