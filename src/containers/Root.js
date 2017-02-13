import React from 'react'
import ProductList from '../components/ProductList'
import { Provider } from 'mobx-react'
import productStore from '../stores/ProductStore'

//5/ We use a provider to pass a productStore into the component tree
const Root = () => (
  <Provider productStore={ productStore }>
    <ProductList />
  </Provider>
)

export default Root
