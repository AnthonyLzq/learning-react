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
    >
      {/* Everything inside a tag is a children and it is passed in the props object */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum numquam modi quaerat consequuntur atque vitae, ipsum ullam eius a.</p>
    </Book>
    <Book
      author={secondBook.author}
      imgSrc={secondBook.imgSrc}
      title={secondBook.title}
    />
  </section>
)

const Book = ({ author, imgSrc, title, children }) => (
  <article className='book'>
    <img src={imgSrc} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
)

ReactDOM.render(<BookList />, document.getElementById('root'))
