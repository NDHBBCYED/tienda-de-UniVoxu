"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import "../styles/Header.css"

function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // En una aplicación real, aquí redirigimos a la página de resultados de búsqueda
    console.log("Búsqueda:", searchQuery)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/univoux-Mesa%20de%20trabajo%201-pQjI9srBnVL5VfYiPI9nHODgae8d6Y.png"
            alt="UniVoxu - Donde los universitarios tienen voz"
            className="logo-image"
          />
        </Link>

        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <i className="icon-search"></i>
          <input
            type="search"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Buscar productos"
          />
        </form>

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



