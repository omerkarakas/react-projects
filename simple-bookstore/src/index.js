import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Emily Henry',
    title: 'Beach Read',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81dnLwy3-vL._AC_UL604_SR604,400_.jpg',
    description: `A simple description
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque beatae
          consectetur atque sequi vero? Aliquid quam ut voluptatibus ab hic quae
          doloremque eos error inventore.`,
  },

  {
    author: 'Colleen Hoover',
    title: 'Ugly Love: A Novel',
    img: 'https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL604_SR604,400_.jpg',
  },
  {
    author: 'Delia Owens',
    title: 'Where the Crawdads Sing',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',
  },
];

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
          <Book key={book.title} book={book}>
            {book.description}
          </Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { author, title, img } = props.book;
  // const Book = ({ author, title, img, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BookList />
  // </React.StrictMode>
);
