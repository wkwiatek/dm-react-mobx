import React from 'react'
import { observer } from 'mobx-react'

import Product from './Product'
import productStore from '../stores/ProductStore'

@observer
class ProductList extends React.Component {

  handleBuyClick = id => {
    // Here we're going to use an action from store
    productStore.buyProduct(id)
  }

  render() {
    return (
      <ul>
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
