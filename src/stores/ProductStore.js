import { action, observable } from 'mobx'

class ProductStore {
  @observable products = [
    { id: 0, name: 'Apple', isSold: false },
    { id: 1, name: 'Coffee', isSold: false },
  ]

  //4/ In strict mode we have to do changes to products inside actions
  @action buyProduct = id => {
    const productToBeSold = this.products.find(p => p.id === id)
    productToBeSold.isSold = true
  }
}

export default new ProductStore()
