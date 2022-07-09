import React from 'react';
import { useGlobalContext } from '../context';

function MButton({ text }) {
  const { memButtonClick } = useGlobalContext();
  const clickMe = (e) => {
    memButtonClick({ text });
  };
  return (
    <div className="m-button" onClick={(e) => clickMe(e)}>
      {text}
    </div>
  );
}

export default MButton;
