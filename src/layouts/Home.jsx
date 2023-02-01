/**
 * Componente página principal
 * @author Paula Rumeu Romero
 * @module Home
 */

// Import de imagenes
import logo from "../assets/img/logo.png"
import group from "../assets/img/group.png"

/**
 * @returns {JSX} Página principal
 */
const Home = () => {
  return (
    <main className="index">
      <div className="index__grid">
        <div className="index__grid_div1">
          <img className="index__grid_div1_img" src={logo} alt="Rick y Morty" />
        </div>
        <div className="index__grid_div2">
          <img className="index__grid_div2_img" src={group} alt="" />
        </div>
        <div className="index__grid_div3">
          <h1 className="index__grid_div3_h1">Galería de personajes</h1>
          <p className="index__grid_div3_subtitulo">
            Todas los personajes de la aclamada serie de{" "}
            <span lang="en">Adult Swing</span>
          </p>
          <p>
            <a href="/listado" className="index__grid_div3_btn_cardview">
              Ver galería
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
export default Home
