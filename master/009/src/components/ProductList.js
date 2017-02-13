import React from 'react'
import { inject, observer } from 'mobx-react'

import Product from './Product'

@inject('productStore')
@observer
class ProductList extends React.Component {

  handleBuyClick = id => {
    this.props.productStore.buyProduct(id)
  }

  render() {
    /// Not only products but also computed soldProductsNumber will be now taken
    const { products, soldProductsNumber } = this.props.productStore

    return (
      <div>
        <ul>
          { products.map(p => (
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
        {/* It's just to give a number of sold products */}
        <span>No. of sold products: { soldProductsNumber }</span>
      </div>
    )
  }
}

export default ProductList
