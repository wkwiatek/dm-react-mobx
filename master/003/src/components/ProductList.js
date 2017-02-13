import React from 'react'

// We don't have stateless component any more, so we do have to use classes
class ProductList extends React.Component {
  //6/ Class properties are one of the nicest way of dealing with an initial state
  state = {
    products: [
      { id: 0, name: 'Apple' },
      { id: 1, name: 'Coffee' }
    ]
  }

  render() {
    //9/ We're mapping component's state into a view
    return (
      <ul>
        { this.state.products.map(p => (
          <li key={ p.id }>
            { p.name }
          </li>
        ) ) }
      </ul>
    )
  }
}

export default ProductList
