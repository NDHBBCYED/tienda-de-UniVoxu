import { Link } from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <i className="icon-shopping-bag"></i>
              <span>UniVoxu</span>
            </div>
            <p>La plataforma de compra y venta para estudiantes universitarios.</p>
          </div>

          <div className="footer-column">
            <h3>Plataforma</h3>
            <ul>
              <li>
                <Link to="#">Cómo funciona</Link>
              </li>
              <li>
                <Link to="#">Reglas de publicación</Link>
              </li>
              <li>
                <Link to="#">Comisiones</Link>
              </li>
              <li>
                <Link to="#">Universidades asociadas</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Soporte</h3>
            <ul>
              <li>
                <Link to="#">Centro de ayuda</Link>
              </li>
              <li>
                <Link to="#">Contacto</Link>
              </li>
              <li>
                <Link to="#">Reportar problema</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="#">Términos de servicio</Link>
              </li>
              <li>
                <Link to="#">Política de privacidad</Link>
              </li>
              <li>
                <Link to="#">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} UniVoxu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

