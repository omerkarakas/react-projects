import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let textToDislay = [];
    let i = 1;
    do {
      textToDislay.push(data[i]);
      i++;
    } while (i <= count);
    setText(textToDislay);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem impsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      {text && (
        <article className="lorem-text">
          {text.map((para, index) => {
            return <p key={index}>{para}</p>;
          })}
        </article>
      )}
    </section>
  );
}

export default App;
