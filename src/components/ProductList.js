import React from 'react'
import Product from './Product'

class ProductList extends React.Component {

  //6/ isSold is a new property in our state
  state = {
    products: [
      { id: 0, name: 'Apple', isSold: false },
      { id: 1, name: 'Coffee', isSold: false }
    ]
  }

  //10/ Here is the real handler that changes the state
  handleBuyClick = id => {
    this.setState(previousState => {
      const products = previousState.products.map(p => p.id === id
        ? { ...p, isSold: true }
        : p
      )

      return { products }
    })
  }

  render() {
    return (
      <ul>
        { this.state.products.map(p => (
          <li key={ p.id }>
            {/* Here we're passing more data */}
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
