import React from 'react'
import { observer } from 'mobx-react'

const Product = ({ id, name, isSold, onBuyClick }) => {
  const handleClick = () => {
    onBuyClick(id)
  }

  return (
    <div>
      <span style={ { textDecoration: isSold ? 'line-through' : 'none' }}>
        { name }
      </span>
      <button onClick={ handleClick }>
        Buy
      </button>
    </div>
  )
}

// We need to mark component as observer; applies to all component that are using observables
export default observer(Product)
