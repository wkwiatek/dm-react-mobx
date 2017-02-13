import React from 'react'

// Now we have to pass also id, isSold, and onBuyClick handler
const Product = ({ id, name, isSold, onBuyClick }) => {
  //3/ Here we need an id to do a proper callback
  const handleClick = () => {
    onBuyClick(id)
  }

  return (
    <div>
      {/* Here we can add some inline styling to see component changes on the UI */}
      <span style={ { textDecoration: isSold ? 'line-through' : 'none' }}>
        { name }
      </span>
      {/* And that's how our handler looks like */}
      <button onClick={ handleClick }>
        Buy
      </button>
    </div>
  )
}

export default Product
