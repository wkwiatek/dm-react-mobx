import React from 'react'
import ProductList from '../components/ProductList'
import { Provider } from 'mobx-react'
import productStore from '../stores/ProductStore'
import DevTools from 'mobx-react-devtools'

const Root = () => (
  <div>
    <Provider productStore={ productStore }>
      <ProductList />
    </Provider>
    {/* It's a React component too, so it's only applicable for development mode */}
    <DevTools />
  </div>
)

export default Root
