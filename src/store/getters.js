export const cartProducts = state => {
  return state.cart.added.map(({ id, quality }) => {
    // 这里相当于是传入一个state.cart.added 对象，写法是解构的形式
    // 因为added 对象存的是id, quality 字段，所以需要给返回出去的新对象进行给相应字段赋值，即products
    // 最后，把products 渲染出来
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quality
    }
  })
}
