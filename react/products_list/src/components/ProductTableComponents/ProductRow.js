import React from 'react'

const ProductRow = ({ product }) => {

  const productsName = () => {
  if (product.stocked == false) {
    return <span style={{color:"red"}}>{product.name}</span>
    }else{
    return product.name
    }
  }
  
  return (
    <tr>
      <th>{productsName()}</th>
      <th>{product.price}</th>
    </tr>
  )
}

export default ProductRow