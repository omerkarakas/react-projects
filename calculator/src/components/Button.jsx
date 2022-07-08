import React from 'react';
import { useGlobalContext } from '../context';

function Button({ id, children = id }) {
  const buttonId = id;
  let isNumeric = !isNaN(+id);
  let equals = id === '=';

  const { buttonClick } = useGlobalContext();

  const clickMe = (e) => {
    buttonClick(buttonId);
  };

  return (
    <div
      className={`button ${isNumeric && 'numeric-button'} ${
        equals && 'equals-button'
      }`}
      onClick={(e) => clickMe(e)}
    >
      {children}
    </div>
  );
}

export default Button;
