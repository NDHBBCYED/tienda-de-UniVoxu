import { Link } from "react-router-dom"
import "../styles/ProductCard.css"

function ProductCard({ id, title, price, image, category, university }) {
  const imageUrl = image || "https://placehold.co/200x200"

  return (
    <Link to={`/products/${id}`} className="product-card" aria-label={`Ver detalles de ${title}`}>
      <div className="product-image">
        <img src={imageUrl || "/placeholder.svg"} alt={title} />
        <span className="product-category">{category}</span>
      </div>
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <div className="product-footer">
        <i className="icon-building" aria-hidden="true"></i>
        <span>{university}</span>
      </div>
    </Link>
  )
}

export default ProductCard


