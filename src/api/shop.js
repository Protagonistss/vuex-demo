const _products = [
  { id: 1, title: 'demo1', price: 5000, inventory: 2 },
  { id: 2, title: 'demo2', price: 4500, inventory: 3 },
  { id: 3, title: 'demo3', price: 6000, inventory: 5 },
  { id: 4, title: 'demo4', price: 7000, inventory: 6 }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      Math.random() > 0.5 ? cb() : errorCb()
    }, 100)
  }
}
