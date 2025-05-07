// import React from 'react'

// function ProductCard({ product }) {
//   return (
//     <div>
//       <img src={product.image} alt={product.name} />
//       <h1>{product.name}</h1>
//       <p>Price: ₹{product.price}</p>
//     </div>
//   )
// }

// export default ProductCard

import React, { useEffect, useState } from 'react'

function ProductCard() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [])
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className='w-full flex flex-col items-center'>
      {/* Search Bar */}
      <div className='mb-6 flex justify-center'>
        <input
          type='text'
          placeholder='Search products...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl w-full'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col'
            >
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <div className='p-4 flex-1 flex flex-col'>
                <h2 className='text-md font-semibold mb-1 line-clamp-2'>
                  {product.title}
                </h2>
                <p className='text-sm text-gray-500 mb-1 capitalize'>
                  {product.category}
                </p>
                <p className='text-green-600 font-bold text-lg mb-3'>
                  ₹{Math.floor(product.price * 80)}
                </p>
                <button className='mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center col-span-full text-gray-500'>
            No products found.
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductCard
