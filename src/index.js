import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const firstBook = {
  author: 'Amelia Hepworth',
  imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title : 'I Love You to the Moon and Back'
}

const secondBook = {
  author: 'Kristin Hannah',
  imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/91g%2BaK0nCnL._AC_UL200_SR200,200_.jpg',
  title : 'The Four Winds: A Novel'
}

const BookList = () => (
  <section className='bookList'>
    <Book
      author={firstBook.author}
      imgSrc={firstBook.imgSrc}
      title={firstBook.title}
    />
    <Book
      author={secondBook.author}
      imgSrc={secondBook.imgSrc}
      title={secondBook.title}
    />
  </section>
)

const Book = props => (
  <article className='book'>
    <img src={props.imgSrc} alt='' />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
)

ReactDOM.render(<BookList />, document.getElementById('root'))
