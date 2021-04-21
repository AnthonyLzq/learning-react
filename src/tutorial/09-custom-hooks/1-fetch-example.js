import React from 'react'
import useFetch from './2-useFetch'

const URL = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(URL)

  console.log(products)

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
