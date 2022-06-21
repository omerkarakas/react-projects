import React from 'react';

const Book = (props) => {
  const { author, title, img } = props.book;
  // const Book = ({ author, title, img, children }) => {

  const clickHandler = (e) => {
    alert('hello');
    console.log(e.target);
  };

  const parametricFunc = (e, author) => {
    alert(author);
    console.log(e.target);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          alert(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        ButtonX
      </button>
      <button type="button" onClick={(e) => parametricFunc(e, author)}>
        Parametric Func{' '}
      </button>
      {props.children}
    </article>
  );
};

export default Book;
