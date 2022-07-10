import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCoctail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">search cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCoctail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
