import React from 'react'

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

export default Book
