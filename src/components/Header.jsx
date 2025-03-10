"use client"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import "../styles/Header.css"

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    // Si hay una función onSearch proporcionada, la llamamos con el término de búsqueda
    if (onSearch) {
      onSearch(searchQuery)

      // Navegar a la página principal con el parámetro de búsqueda
      navigate(`/?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    if (onSearch) {
      onSearch("")
      navigate("/")
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={() => onSearch && onSearch("")}>
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
          {searchQuery && (
            <button type="button" className="clear-search" onClick={handleClearSearch} aria-label="Limpiar búsqueda">
              ✕
            </button>
          )}
          <button type="submit" className="search-button" aria-label="Buscar">
            Buscar
          </button>
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

