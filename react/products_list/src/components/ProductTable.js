import React from 'react'
import ProductCategoryRow from './ProductTableComponents/ProductCategoryRow'
import ProductRow from './ProductTableComponents/ProductRow'

const ProductTable = ({ products, text, filter }) => {

  const row = []
  let lastCategory = null

  products.forEach(product => {
    if (product.name.indexOf(text) === -1) {
      return
    }
    if (filter && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      row.push(<ProductCategoryRow product={product.category} key={product.category}/>)
    }
    row.push(<ProductRow product={product} key={product.name}/>)
    lastCategory = product.category
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
    </table>
  )
}

export default ProductTable