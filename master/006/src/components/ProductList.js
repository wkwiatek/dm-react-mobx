import React from 'react'
import { observer } from 'mobx-react'

import Product from './Product'
// We're importing store and we'll use it directly
import productStore from '../stores/ProductStore'

// We need to mark component as observer
@observer
class ProductList extends React.Component {

  //4/ This time we cannot change the reference
  handleBuyClick = id => {
    const productToBeSold = productStore.products.find(p => p.id === id)
    productToBeSold.isSold = true
  }

  render() {
    return (
      <ul>
        {/* We can use productStore directly here too */}
        { productStore.products.map(p => (
          <li key={ p.id }>
            <Product
              id={ p.id }
              name={ p.name }
              isSold={ p.isSold }
              onBuyClick={ this.handleBuyClick }
            />
          </li>
        ) ) }
      </ul>
    )
  }
}

export default ProductList
