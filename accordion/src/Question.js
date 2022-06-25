import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleButton = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleButton}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showInfo && info}</p>
    </article>
  );
};

export default Question;
