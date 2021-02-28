import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Book from './Book'
import { books } from './books'

const BookList = () => (
  <section className='bookList'>
    {books.map((book, item) => (
      <Book key={item} {...book} />
    ))}
  </section>
)

ReactDOM.render(<BookList />, document.getElementById('root'))
