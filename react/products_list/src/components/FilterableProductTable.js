import React, { useState } from 'react'
import SearchBar from './SerchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ( {products} ) => {
  
  const [text, setText] = useState("")
  const [filter, setFilter] = useState(false)

  return (
    <div>
      <SearchBar setText={setText} setFilter={setFilter}/>
      <ProductTable text={text} filter={filter} products={products} />
    </div>
  )
}

export default FilterableProductTable