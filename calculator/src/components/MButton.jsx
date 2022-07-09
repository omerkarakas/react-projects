import React from 'react';
import { useGlobalContext } from '../context';

function MButton({ text, control }) {
  const { memory, memButtonClick } = useGlobalContext();
  const isMemFree = control === 'true' && memory === null;
  const clickMe = (e) => {
    if (!e.target.classList.contains('passive')) memButtonClick(text);
  };
  return (
    <div
      className={`${isMemFree ? 'passive' : ''} m-button`}
      onClick={(e) => clickMe(e)}
    >
      {text}
    </div>
  );
}

export default MButton;
