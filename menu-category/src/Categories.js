import React from 'react';

const Categories = ({ cats, filterItems }) => {
  return (
    <div className="btn-container">
      {cats.map((c) => {
        return (
          <button key={c} className="filter-btn" onClick={() => filterItems(c)}>
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
