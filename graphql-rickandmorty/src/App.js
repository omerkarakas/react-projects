import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import './App.css';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>Rick And Morty</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/search" element={<Search />} />
          <Route path=":id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
