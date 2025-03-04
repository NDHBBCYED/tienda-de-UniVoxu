"use client"

import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/ProductDetailPage.css"

function ProductDetailPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("details")
  const [mainImage, setMainImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Simula carga de datos
  useEffect(() => {
    // Simular una petición a la API
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // En una aplicación real, aquí cargaríamos los datos del producto desde una API
  const product = {
    id,
    title: "Libro Cálculo Avanzado",
    description:
      "Libro de Cálculo Avanzado en excelente estado. Usado durante un semestre en la clase de Matemáticas III. Tiene algunas anotaciones a lápiz que pueden ser borradas. Incluye todos los capítulos y no tiene páginas dañadas.",
    price: 25.99,
    images: ["https://placehold.co/400x400", "https://placehold.co/400x400", "https://placehold.co/400x400"],
    category: "Libros",
    university: "Universidad Central",
    seller: {
      name: "Carlos Rodríguez",
      rating: 4.8,
      joinDate: "Septiembre 2023",
    },
    publishDate: "15 de marzo de 2024",
  }

  // Función para cambiar la imagen principal
  const handleThumbnailClick = (index) => {
    setMainImage(index)
  }

  if (isLoading) {
    return (
      <div className="product-detail-page">
        <Header />
        <main className="main-content">
          <div className="loading-spinner">Cargando...</div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <Header />

      <main className="main-content">
        <div className="back-link">
          <Link to="/">
            <i className="icon-arrow-left"></i>
            Volver al inicio
          </Link>
        </div>

        <div className="product-container">
          <div className="product-images">
            <div className="main-image">
              <img
                src={product.images[mainImage] || "https://placehold.co/400x400"}
                alt={`${product.title} - Imagen principal`}
              />
            </div>

            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${mainImage === index ? "active" : ""}`}
                  onClick={() => handleThumbnailClick(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      handleThumbnailClick(index)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  <img
                    src={image || "https://placehold.co/400x400"}
                    alt={`${product.title} - Miniatura ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-header">
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
                <span className="product-university">
                  <i className="icon-building"></i>
                  {product.university}
                </span>
              </div>

              <h1 className="product-title">{product.title}</h1>
              <p className="product-price">${product.price.toFixed(2)}</p>

              <div className="product-date">
                <i className="icon-calendar"></i>
                <span>Publicado: {product.publishDate}</span>
              </div>

              <div className="product-actions">
                <button className="btn primary-btn">Contactar al vendedor</button>
                <button className="btn secondary-btn">
                  <i className="icon-share"></i>
                  Compartir
                </button>
              </div>
            </div>

            <div className="product-tabs" role="tablist">
              <div className="tabs-header">
                <button
                  className={`tab-btn ${activeTab === "details" ? "active" : ""}`}
                  onClick={() => setActiveTab("details")}
                  aria-selected={activeTab === "details"}
                  role="tab"
                  id="tab-details"
                  aria-controls="panel-details"
                  tabIndex={activeTab === "details" ? 0 : -1}
                >
                  Detalles
                </button>
                <button
                  className={`tab-btn ${activeTab === "seller" ? "active" : ""}`}
                  onClick={() => setActiveTab("seller")}
                  aria-selected={activeTab === "seller"}
                  role="tab"
                  id="tab-seller"
                  aria-controls="panel-seller"
                  tabIndex={activeTab === "seller" ? 0 : -1}
                >
                  Vendedor
                </button>
              </div>

              <div className="tabs-content">
                {activeTab === "details" && (
                  <div className="tab-panel" role="tabpanel" id="panel-details" aria-labelledby="tab-details">
                    <h3>Descripción</h3>
                    <p>{product.description}</p>
                  </div>
                )}

                {activeTab === "seller" && (
                  <div className="tab-panel" role="tabpanel" id="panel-seller" aria-labelledby="tab-seller">
                    <div className="seller-info">
                      <div className="seller-avatar">
                        <i className="icon-user"></i>
                      </div>
                      <div className="seller-details">
                        <h3>{product.seller.name}</h3>
                        <p>Miembro desde {product.seller.joinDate}</p>
                      </div>
                    </div>

                    <div className="seller-rating">
                      <div className="stars" aria-label={`Calificación: ${product.seller.rating} de 5 estrellas`}>
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`icon-star ${i < Math.floor(product.seller.rating) ? "filled" : ""}`}
                            aria-hidden="true"
                          ></i>
                        ))}
                      </div>
                      <span>{product.seller.rating}</span>
                    </div>

                    <button className="btn secondary-btn">
                      <i className="icon-message"></i>
                      Contactar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProductDetailPage

