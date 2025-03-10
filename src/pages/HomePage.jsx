"use client"

import { useState, useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import CategoryCard from "../components/CategoryCard"
import TopCategoryNav from "../components/TopCategoryNav"
import "../styles/HomePage.css"

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const productsSectionRef = useRef(null)
  const location = useLocation()

  // Extraer término de búsqueda de la URL al cargar la página
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const searchParam = params.get("search")
    if (searchParam) {
      setSearchTerm(searchParam)
      setSelectedCategory(null)
      setShowAllProducts(true)
      scrollToProductsSection()
    }
  }, [location.search])

  // Datos de ejemplo para categorías
  const categories = [
    { id: 1, name: "Libros", count: 120, icon: "book" },
    { id: 2, name: "Electrónica", count: 85, icon: "laptop" },
    { id: 3, name: "Transporte", count: 42, icon: "bicycle" },
    { id: 4, name: "Ropa", count: 96, icon: "shirt" },
    { id: 5, name: "Cafetería", count: 38, icon: "coffee" },
    { id: 6, name: "Más", count: 150, icon: "plus" },
  ]

  // Datos de ejemplo para productos
  const allProducts = [
    {
      id: 1,
      title: "Libro Cálculo Avanzado",
      price: 25.99,
      image: "https://placehold.co/200x200",
      category: "Libros",
      university: "Universidad Central",
    },
    {
      id: 2,
      title: "Laptop HP usada (buen estado)",
      price: 299.99,
      image: "https://placehold.co/200x200",
      category: "Electrónica",
      university: "Universidad Nacional",
    },
    {
      id: 3,
      title: "Bicicleta urbana",
      price: 150,
      image: "https://placehold.co/200x200",
      category: "Transporte",
      university: "Universidad Técnica",
    },
    {
      id: 4,
      title: "Sudadera Facultad Ingeniería",
      price: 35,
      image: "https://placehold.co/200x200",
      category: "Ropa",
      university: "Universidad Central",
    },
    {
      id: 5,
      title: "Libro Programación en Python",
      price: 30.5,
      image: "https://placehold.co/200x200",
      category: "Libros",
      university: "Universidad Nacional",
    },
    {
      id: 6,
      title: "Tablet Samsung Galaxy Tab",
      price: 180,
      image: "https://placehold.co/200x200",
      category: "Electrónica",
      university: "Universidad Técnica",
    },
    {
      id: 7,
      title: "Patineta Eléctrica",
      price: 220,
      image: "https://placehold.co/200x200",
      category: "Transporte",
      university: "Universidad Central",
    },
    {
      id: 8,
      title: "Camiseta Facultad Medicina",
      price: 20,
      image: "https://placehold.co/200x200",
      category: "Ropa",
      university: "Universidad Nacional",
    },
  ]

  // Función para filtrar productos según búsqueda y categoría
  const filterProducts = () => {
    let filtered = allProducts

    // Filtrar por categoría si hay una seleccionada
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filtrar por término de búsqueda si existe
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.university.toLowerCase().includes(searchLower),
      )
    }

    // Si no hay categoría seleccionada y no se ha pedido ver todos, mostrar solo destacados
    if (!selectedCategory && !showAllProducts && !searchTerm) {
      filtered = filtered.slice(0, 4)
    }

    return filtered
  }

  // Obtener productos filtrados
  const filteredProducts = filterProducts()

  // Efecto para manejar la carga de productos
  useEffect(() => {
    if (selectedCategory || showAllProducts || searchTerm) {
      setIsLoading(true)
      // Simular tiempo de carga
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [selectedCategory, showAllProducts, searchTerm])

  // Función para seleccionar una categoría
  const handleCategorySelect = (categoryName) => {
    if (categoryName === selectedCategory) {
      // Si se hace clic en la misma categoría, deseleccionar
      setSelectedCategory(null)
    } else {
      setSelectedCategory(categoryName)
      setShowAllProducts(false)
    }
    // Limpiar búsqueda al seleccionar categoría
    setSearchTerm("")
    // Desplazar a la sección de productos de manera segura
    scrollToProductsSection()
  }

  // Función para mostrar todos los productos
  const handleExploreAll = () => {
    setSelectedCategory(null)
    setShowAllProducts(true)
    setSearchTerm("")
    // Desplazar a la sección de productos
    scrollToProductsSection()
  }

  // Función para manejar la búsqueda desde el header
  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term) {
      setShowAllProducts(true)
      scrollToProductsSection()
    } else {
      setShowAllProducts(false)
    }
  }

  // Función para desplazarse a la sección de productos de manera segura
  const scrollToProductsSection = () => {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Función para resetear los filtros
  const handleResetFilters = () => {
    setSelectedCategory(null)
    setShowAllProducts(false)
    setSearchTerm("")
  }

  // Determinar el título de la sección de productos
  const getProductsSectionTitle = () => {
    if (searchTerm) {
      return `Resultados para "${searchTerm}"`
    } else if (selectedCategory) {
      return `Productos: ${selectedCategory}`
    } else if (showAllProducts) {
      return "Todos los productos"
    } else {
      return "Productos destacados"
    }
  }

  return (
    <div className="home-page">
      <Header onSearch={handleSearch} />

      {/* Nueva sección de categorías en la parte superior */}
      <TopCategoryNav
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      <main className="main-content">
        {!searchTerm && (
          <section className="hero-section">
            <div className="hero-content">
              <h1>Compra y vende entre estudiantes</h1>
              <p>La plataforma ideal para encontrar lo que necesitas o vender lo que ya no usas en tu campus.</p>
              <div className="hero-buttons">
                <button
                  className="btn primary-btn"
                  onClick={handleExploreAll}
                  aria-label="Explorar todos los productos"
                >
                  Explorar productos
                </button>
              </div>
            </div>
          </section>
        )}

        {!searchTerm && (
          <section className="categories-section">
            <div className="section-header">
              <h2>Categorías</h2>
              <button
                className="view-all"
                onClick={handleResetFilters}
                aria-label="Ver todas las categorías"
                disabled={!selectedCategory && !showAllProducts}
              >
                Ver todas
              </button>
            </div>

            <div className="categories-grid" role="tablist">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  icon={category.icon}
                  name={category.name}
                  count={category.count}
                  onClick={() => handleCategorySelect(category.name)}
                  isSelected={selectedCategory === category.name}
                />
              ))}
            </div>
          </section>
        )}

        <section className="products-section" ref={productsSectionRef}>
          <div className="section-header">
            <h2>{getProductsSectionTitle()}</h2>
            {(selectedCategory || showAllProducts || searchTerm) && (
              <button className="view-all" onClick={handleResetFilters} aria-label="Ver productos destacados">
                Ver destacados
              </button>
            )}
          </div>

          <div className={`products-grid ${isLoading ? "loading" : ""}`}>
            {isLoading ? (
              <div className="loading-indicator">Cargando productos...</div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  university={product.university}
                />
              ))
            ) : (
              <div className="no-products">
                {searchTerm ? (
                  <p>No se encontraron productos para "{searchTerm}".</p>
                ) : (
                  <p>No hay productos disponibles en esta categoría.</p>
                )}
                <button className="btn secondary-btn mt-4" onClick={handleResetFilters}>
                  Ver todos los productos
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage

