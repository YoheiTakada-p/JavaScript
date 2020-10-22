import React from 'react'

const SearchBar = ({ setText, setFilter }) => {

  const handleTextChange = e => {
    setText(e.target.value)
  }

  const handleCheckboxChange = () => {
    setFilter(prev => {
      return !prev
    })
  }
  
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." onChange={e => handleTextChange(e)}/>
        <br/>
        <input type="checkbox" onClick={handleCheckboxChange} />
        Only show products in stock
      </form>
    </div>
  )
}

export default SearchBar