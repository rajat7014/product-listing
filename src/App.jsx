// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import ProductCard from './components/ProductCard'

// function App() {
//   // ✅ useState to store product data, search, loading, error
//   const [products, setProducts] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   // ✅ useEffect to fetch data once on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true)
//       setError(null)
//       try {
//         const res = await axios.get('http://localhost:5000/products')
//         setProducts(res.data)
//       } catch (err) {
//         console.error(err)
//         setError('Failed to load products')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   // ✅ Filter products based on search input
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   // ✅ JSX Render
//   return (
//     <div className='container'>
//       <h1>🛒 Product Listing</h1>

//       <input
//         type='text'
//         placeholder='Search products...'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)} // ✅ onChange
//       />

//       {loading && <p>Loading products...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div className='product-grid'>
//         {filteredProducts.length > 0
//           ? filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           : !loading && <p>No products found</p>}
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
// import ProductList from './ProductList'; // Make sure the path is correct
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold text-center p-6'>Product Listing</h1>
      <ProductCard />
    </div>
  )
}

export default App
