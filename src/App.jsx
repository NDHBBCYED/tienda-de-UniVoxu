import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductDetailPage from "./pages/ProductDetailPage"
import PublishProductPage from "./pages/PublishProductPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/publish" element={<PublishProductPage />} />
    </Routes>
  )
}

export default App


