import React from 'react'

const ProductCategoryRow = ({ product }) => {
  return (
    <tr>
      <th>
        <span style={{color:"blue"}}>{product}</span>
      </th>
    </tr>
  )
}

export default ProductCategoryRow