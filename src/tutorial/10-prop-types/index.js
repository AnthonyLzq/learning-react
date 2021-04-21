import React from 'react'

import Product from './Product'
import useFetch from '../09-custom-hooks/2-useFetch'

const URL = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(URL)

  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index