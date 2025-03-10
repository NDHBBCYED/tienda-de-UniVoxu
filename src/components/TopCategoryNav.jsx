"use client"

import { useRef, useEffect } from "react"
import "../styles/TopCategoryNav.css"

function TopCategoryNav({ categories, selectedCategory, onCategorySelect }) {
  const navRef = useRef(null)

  // Función para manejar el desplazamiento horizontal con rueda del mouse
  const handleWheel = (e) => {
    if (navRef.current) {
      e.preventDefault()
      navRef.current.scrollLeft += e.deltaY
    }
  }

  // Añadir y eliminar event listener para el desplazamiento horizontal
  useEffect(() => {
    const navElement = navRef.current
    if (navElement) {
      navElement.addEventListener("wheel", handleWheel, { passive: false })

      return () => {
        navElement.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  return (
    <div className="top-category-nav">
      <div className="top-category-container" ref={navRef}>
        <button
          className={`category-item ${!selectedCategory ? "active" : ""}`}
          onClick={() => onCategorySelect(null)}
          aria-pressed={!selectedCategory}
        >
          <div className="category-icon">
            <i className="icon-all"></i>
          </div>
          <span>Todos</span>
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-item ${selectedCategory === category.name ? "active" : ""}`}
            onClick={() => onCategorySelect(category.name)}
            aria-pressed={selectedCategory === category.name}
          >
            <div className="category-icon">
              <i className={`icon-${category.icon}`}></i>
            </div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TopCategoryNav

