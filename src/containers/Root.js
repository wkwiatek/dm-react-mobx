import React from 'react'
// Importing product list component from newly created 'components' directory
import ProductList from '../components/ProductList'

//3/ Our root component now is rendering the product list component
const Root = () => (
  <ProductList />
)

export default Root
