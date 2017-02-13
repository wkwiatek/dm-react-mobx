import { observable } from 'mobx'

class ProductStore {
  //4/ We have to use @observable to let MobX track changes
  @observable products = [
    { id: 0, name: 'Apple', isSold: false },
    { id: 1, name: 'Coffee', isSold: false },
  ]
}

// We have to create an instance of the store
export default new ProductStore()
