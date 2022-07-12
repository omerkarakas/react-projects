import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { initialtext } from './initial-text';

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');

  useEffect(() => {
    setMarkdown(initialtext);
  }, []);

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
