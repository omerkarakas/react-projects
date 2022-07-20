import { useState } from 'react';

function App() {
  const [state, setState] = useState({ posts: [], comments: [] });

  return (
    <>
      <h1>App</h1>
      <button
        onClick={() =>
          setState({
            posts: ['post 1'],
          })
        }
      >
        Add a post
      </button>

      <button
        onClick={() =>
          setState({
            comments: ['comment 1'],
          })
        }
      >
        Add a comment
      </button>
    </>
  );
}

export default App;
