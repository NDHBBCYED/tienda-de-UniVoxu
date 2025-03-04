import "../styles/CategoryCard.css"

function CategoryCard({ icon, name, count, onClick, isSelected }) {
  const handleClick = onClick || (() => {})
  const selected = isSelected || false

  return (
    <div
      className={`category-card ${selected ? "selected" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleClick && handleClick()
        }
      }}
      aria-pressed={selected}
      aria-label={`Categoría: ${name}`}
    >
      <div className="category-icon">
        <i className={`icon-${icon}`} aria-hidden="true"></i>
      </div>
      <h3 className="category-name">{name}</h3>
      <p className="category-count">{count} productos</p>
    </div>
  )
}

export default CategoryCard



