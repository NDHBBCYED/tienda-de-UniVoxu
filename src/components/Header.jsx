import { Link } from "react-router-dom"
import "../styles/Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <i className="icon-shopping-bag"></i>
          <span>UniVoxu</span>
        </Link>

        <div className="search-bar">
          <i className="icon-search"></i>
          <input type="search" placeholder="Buscar productos..." />
        </div>

        <div className="header-actions">
          <Link to="/publish" className="btn primary-btn">
            <i className="icon-plus"></i>
            Publicar
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

