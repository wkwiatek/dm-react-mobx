import React from 'react'
import Product from './Product'

class ProductList extends React.Component {
  state = {
    products: [
      { id: 0, name: 'Apple' },
      { id: 1, name: 'Coffee' }
    ]
  }

  render() {
    return (
      <ul>
        { this.state.products.map(p => (
          <li key={ p.id }>
            {/* We can make a product component instead of putting more and more data here */}
            <Product name={ p.name } />
          </li>
        ) ) }
      </ul>
    )
  }
}

export default ProductList
