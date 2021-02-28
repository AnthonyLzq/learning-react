import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const books = [
  {
    author: 'Amelia Hepworth',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back'
  },
  {
    author: 'Kristin Hannah',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/91g%2BaK0nCnL._AC_UL200_SR200,200_.jpg',
    title: 'The Four Winds: A Novel'
  }
]

const BookList = () => (
  <section className='bookList'>
    {books.map((book, item) => (
      <Book key={item} {...book} />
    ))}
  </section>
)

const Book = ({ author, imgSrc, title }) => {
  const clickHandler = () => {
    alert('Hello world!')
  }

  const complexClickHandler = author => {
    console.log(author)
  }

  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={imgSrc} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Example
      </button>
      {/* In case we need to pass an argument to our handler, we must pass
          the function execution as an arrow function
       */}
      <button type='button' onClick={() => complexClickHandler(author)}>
        Complex Example
      </button>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
