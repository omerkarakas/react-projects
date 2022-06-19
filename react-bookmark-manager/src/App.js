import { useState } from 'react';
import { BookmarkProvider } from './context/BookmarkContext';
import Home from './page/Home';

const initialBms = [
  {
    name: 'google',
    url: 'http://google.com',
  },
  {
    name: 'okarakas',
    url: 'http://okarakas.com',
  },
];

function App() {
  //const [bms, setBms] = useState(initialBms);

  return (
    <BookmarkProvider>
      <Home />
    </BookmarkProvider>
  );
}

export default App;
