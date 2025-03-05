import { Link } from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/univoux-Mesa%20de%20trabajo%201-pQjI9srBnVL5VfYiPI9nHODgae8d6Y.png"
                alt="UniVoxu"
                className="footer-logo-image"
              />
              <p>La plataforma de compra y venta para estudiantes universitarios.</p>
            </div>
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
          <p>© {currentYear} UniVoxu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

