import React from 'react';
import ReactDOM from 'react-dom/client';

import { books } from './books';
import MyBook from './Book';

import './index.css';

function BookList() {
  return (
    <section className="booklist">
      {/* {books.map((book) => {
        const { img, title, author, description } = book;
        return (
          <Book author={author} title={title} img={img}>
            {description}
          </Book>
        );
      })} */}
      {books.map((book) => {
        return (
          <MyBook key={book.id} book={book}>
            {book.description}
          </MyBook>
        );
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BookList />
  // </React.StrictMode>
);
