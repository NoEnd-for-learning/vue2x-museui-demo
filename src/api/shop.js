/**
 * Mocking client-server processing
 */
const _products = [
  {id: 1, title: 'CoMall-tea', price: 200.01, inventory: 2},
  {id: 2, title: 'T-Shirt White', price: 40.99, inventory: 10},
  {id: 3, title: 'Charli CD', price: 19.99, inventory: 5}
]

// inventory: 库存

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}

/*
* PhantomJS 是一个基于 WebKit 的服务器端 JavaScript API，它全面支持web而不需浏览器。
navigator.userAgent.indexOf('PhantomJS')是判断是否在PhantomJS环境中
* */
