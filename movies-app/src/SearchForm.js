import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { error, query, setQuery } = useGlobalContext();

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>Movie Database</h1>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          autoFocus
          type="text"
          className="form-input"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
