import React from 'react'
import useFetch from '../09-custom-hooks/2-useFetch'

const URL = 'https://course-api.com/javascript-store-products'

const calculateMostExpensive = data => data.reduce((biggest, item) => {
  const price = item.fields.price/100
  if (price >= biggest) biggest = price

  return biggest
}, 0)

// every time props or state changes, component re-renders
const Index = () => {
  const { products } = useFetch(URL)
  const [count, setCount] = React.useState(0)
  const [cart, setCart] = React.useState(0)

  const addToCart = React.useCallback(() => setCart(cart + 1), [cart])

  const mostExpensive = React.useMemo(() => calculateMostExpensive(products), [
    products
  ])

  return (
    <>
      <h1>Count: {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>Cart: {cart}</h1>
      <h1 style={{ marginTop: '3rem' }}>
        Most expensive: {mostExpensive}
      </h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  React.useEffect(() => console.log('big list call'))

  return (
    <section className='products'>
      {products.map(product => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  React.useEffect(() => console.count('single product call'))

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}

export default Index
