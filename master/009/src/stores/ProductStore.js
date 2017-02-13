import { action, computed, observable } from 'mobx'

class ProductStore {
  @observable products = [
    { id: 0, name: 'Apple', isSold: false },
    { id: 1, name: 'Coffee', isSold: false },
  ]

  @action buyProduct = id => {
    const productToBeSold = this.products.find(p => p.id === id)
    productToBeSold.isSold = true
  }

  //3/ We can add an getter which depends on already existing value
  @computed get soldProductsNumber () {
    return this.products.filter(p => p.isSold).length
  }
}

export default new ProductStore()
