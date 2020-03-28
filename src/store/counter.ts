import { observable } from 'mobx'

class CountStore {
  @observable
  counter: number = 0
  counterStore() {
    this.counter++
  }
  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}

export default new CountStore()
