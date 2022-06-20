import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
  author: 'Emily Henry',
  title: 'Beach Read',
  imgSource:
    'https://images-na.ssl-images-amazon.com/images/I/81dnLwy3-vL._AC_UL604_SR604,400_.jpg',
};

const secondBook = {
  author: 'Colleen Hoover',
  title: 'Ugly Love: A Novel',
  imgSource:
    'https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL604_SR604,400_.jpg',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.imgSource}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.imgSource}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { author, title, img } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BookList />
  // </React.StrictMode>
);
