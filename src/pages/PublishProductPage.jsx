import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/PublishProductPage.css"

function PublishProductPage() {
  return (
    <div className="publish-page">
      <Header />

      <main className="main-content">
        <div className="back-link">
          <Link to="/">
            <i className="icon-arrow-left"></i>
            Volver al inicio
          </Link>
        </div>

        <div className="publish-card">
          <div className="card-header">
            <h1>Publicar un producto</h1>
            <p>Completa el formulario para publicar tu producto en el marketplace.</p>
          </div>

          <div className="card-content">
            <form className="publish-form">
              <div className="form-group">
                <label htmlFor="title">Título del producto</label>
                <input type="text" id="title" placeholder="Ej: Libro de Cálculo Avanzado" />
              </div>

              <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea
                  id="description"
                  placeholder="Describe tu producto, su estado, detalles importantes, etc."
                  rows={4}
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Precio ($)</label>
                  <input type="number" id="price" min="0" step="0.01" placeholder="0.00" />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Categoría</label>
                  <select id="category">
                    <option value="">Selecciona una categoría</option>
                    <option value="books">Libros</option>
                    <option value="electronics">Electrónica</option>
                    <option value="transportation">Transporte</option>
                    <option value="clothing">Ropa</option>
                    <option value="food">Cafetería</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="university">Universidad</label>
                <select id="university">
                  <option value="">Selecciona tu universidad</option>
                  <option value="central">Universidad Central</option>
                  <option value="nacional">Universidad Nacional</option>
                  <option value="tecnica">Universidad Técnica</option>
                  <option value="autonoma">Universidad Autónoma</option>
                  <option value="other">Otra</option>
                </select>
              </div>

              <div className="form-group">
                <label>Imágenes del producto</label>
                <div className="image-upload-area">
                  <i className="icon-upload"></i>
                  <p>Arrastra y suelta imágenes aquí o haz clic para seleccionar</p>
                  <span>PNG, JPG o WEBP (máx. 5MB)</span>
                  <input type="file" id="images" multiple accept="image/*" className="hidden-input" />
                  <button type="button" className="btn secondary-btn">
                    Seleccionar archivos
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact">Información de contacto</label>
                <input type="text" id="contact" placeholder="Teléfono o correo electrónico" />
                <p className="form-hint">Esta información será visible para los compradores interesados.</p>
              </div>

              <button type="submit" className="btn primary-btn submit-btn">
                Publicar producto
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PublishProductPage

