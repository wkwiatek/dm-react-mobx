import React from 'react'
import { inject, observer } from 'mobx-react'

import Product from './Product'

/// To use a provided store we have to inject it into the component
@inject('productStore')
@observer
class ProductList extends React.Component {

  handleBuyClick = id => {
    /// The store is in props when we inject the store and provide it correctly
    this.props.productStore.buyProduct(id)
  }

  render() {
    return (
      <ul>
        { this.props.productStore.products.map(p => (
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
