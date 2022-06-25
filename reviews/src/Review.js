import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];

  const showRandomPerson = () => {
    let num;
    do {
      num = Math.floor(Math.random() * people.length);
    } while (num === index);
    setIndex(num);
  };
  const prevPerson = () => {
    let newIndex;
    if (index === 0) newIndex = people.length - 1;
    else newIndex = index - 1;

    setIndex(newIndex);
  };
  const nextPerson = () => {
    let newIndex;
    if (index === people.length - 1) newIndex = 0;
    else newIndex = index + 1;

    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={showRandomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
